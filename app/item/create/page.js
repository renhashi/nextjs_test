"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import useAuth from "../../utils/useAuth"

const CreateItem = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const router = useRouter()
    const loginUserEmail = useAuth()
    console.log("loginUserEmail:", loginUserEmail)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response =await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/create`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({ 
                    title: title, 
                    price: price, 
                    image: image, 
                    description: description,
                    email: "<EMAIL>"
                })
            })
            const result = await response.json()
            alert(result.message)
            router.push("/")
            router.refresh()

        }catch(error){
            alert("アイテムの作成に失敗しました")
            console.error("Error submitting form:", error)
        }
        // Handle form submission logic here
    }

    return (
        <div>
            <h1>アイテム作成</h1>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="アイテム名" required />
                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" name="price" placeholder="価格" required />
                <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="画像" />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="description" rows={15} placeholder="説明" required></textarea>
                <button type="submit">作成</button>
            </form>
        </div>
    )
}

export default CreateItem