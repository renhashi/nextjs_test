"use client"
import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log('[login] handleSubmit called', {email, password})
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user/login`,{
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            //console.log('[login] fetch response status', response.status)
            const result = await response.json()
            //console.log('[login] result', result)
            localStorage.setItem("token", result.token)
            alert(result.message)

        }catch(error){
            console.error("Error:", error)
            alert("ログインに失敗しました")
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="password" placeholder="パスワード" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="button" onClick={handleSubmit}>ログイン</button>
            </form>
        </div>
    )
}

export default Login