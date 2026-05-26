"use client"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"

/*
const DeleteItem = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const router = useRouter()
    const { id } = useParams()

    useEffect(() => {
        if (!id) {
            return
        }

        const getSingleItem = async () => {
            try {
                const response = await fetch(`/api/item/readsingle/${id}`, { cache: "no-store" })
                const data = await response.json()

                if (!data?.singleItem) {
                    throw new Error(data?.message || "アイテム情報の取得に失敗しました")
                }

                const singleItem = data.singleItem

                setTitle(singleItem.title ?? "")
                setPrice(singleItem.price ?? "")
                setImage(singleItem.image ?? "")
                setDescription(singleItem.description ?? "")
                setEmail(singleItem.email ?? "")
                setError("")
            } catch (err) {
                console.error(err)
                setError(err instanceof Error ? err.message : "アイテム情報の取得に失敗しました")
            }
        }

        getSingleItem()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!id) {
            alert("アイテムIDが取得できません")
            return
        }

        try {
            const response = await fetch(`/api/item/delete/${id}`, {
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
            const result = await response.json()
            alert(result.message)
            router.push("/")
            router.refresh()
        } catch (error) {
            alert("アイテムの削除に失敗しました")
            console.error("Error submitting form:", error)
        }
    }

    return (
        <div>
            <h1>アイテム削除</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <h2>{title}</h2>
                <Image src={image} alt={title} width={300} height={300} />
                <h3>価格: {price}円</h3>
                <p>{description}</p>
                <button type="submit">削除</button>
            </form>
        </div>
    )
}

export default DeleteItem
*/
const SubDelete = () => {
    return (<div>
        <h1>アイテム削除</h1>
        <p>アイテムの削除は、アイテム更新ページから行ってください。</p>
    </div>
    )
}

export default SubDelete