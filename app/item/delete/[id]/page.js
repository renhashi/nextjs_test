"use client"
import {useState, useEffect} from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

const DeleteItem = (context) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")
    const {id} = context.params

    const router = useRouter()

    useEffect(() => {
        const getSingleItem = async (id) => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readsingle/${id}`, {cache: "no-store"})
            const data = await response.json()
            const singleItem = data.singleItem
            setTitle(singleItem.title)
            setPrice(singleItem.price)
            setImage(singleItem.image)
            setDescription(singleItem.description)
            setEmail(singleItem.email)
        }
        getSingleItem(id)
    }, [id])

    const handleDelete = async (e) => {
        e.preventDefault()
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    email
                })
            })
            const data = await response.json()
            alert(data.message)
            router.push("/")
            router.refresh()
        }catch(error){
            console.error(error)
            alert("アイテム削除失敗")
        }
    }

    return (
        <div>
            <h1>アイテム削除</h1>
            <form onSubmit={handleDelete}>
                <h2>{title}</h2>
                <Image src={image} alt={title} width={300} height={300} alt="item-image" priority />
                <h3>価格: {price}円</h3>
                <p> {description}</p>
                <button type="submit">削除</button>
            </form>
        </div>
    )
}

export default DeleteItem