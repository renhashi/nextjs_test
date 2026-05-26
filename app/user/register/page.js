"use client"
import { useState } from "react"

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user/register`,{
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            })
            const result = await response.json()
            console.log(result)
            alert("ユーザー登録が完了しました")
        }catch(error){
            console.error(error)
            alert("ユーザー登録に失敗しました")
        }
    }

    return (
        <div>
            <h1>ユーザー登録</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="ユーザー名" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" name="email" placeholder="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="password" placeholder="パスワード" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">登録</button>
            </form>
        </div>
    )
}

export default Register