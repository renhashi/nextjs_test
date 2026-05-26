"use client"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"

const UpdateItem = () => {
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
            const response = await fetch(`/api/item/update/${id}`, {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    title,
                    price,
                    image,
                    description,
                    email
                })
            })
            const result = await response.json()
            alert(result.message)
            router.push("/")
            router.refresh()
        } catch (error) {
            alert("アイテムの更新に失敗しました")
            console.error("Error submitting form:", error)
        }
    }

    return (
        <div>
            <h1>アイテム更新</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="アイテム名" required />
                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" name="price" placeholder="価格" required />
                <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="画像" />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="description" rows={15} placeholder="説明" required></textarea>
                <button type="submit">更新</button>
            </form>
        </div>
    )
}

export default UpdateItem