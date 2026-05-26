import Image from "next/image"
import Link from "next/link"

const getSingleItem = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readsingle/${id}`, {cache: "no-store"})
    const data = await response.json()
    //console.log(data.singleItem)
    const singleItem = data.singleItem
    return singleItem
}

const ReadSingleItem = async (context) => {
    //console.log(context)
    const {id} = await context.params
    //console.log(id)
    const singleItem = await getSingleItem(id)
    return (
        <div>
            <div>
                <Image src={singleItem.image} alt="item-image" width={750} height={500} priority/>
            </div>
            <div>
                <h1>Single Item Page</h1>
                <h2>{singleItem.title}</h2>
                <h3>{singleItem.price}</h3>
                <hr />
                <p>{singleItem.description}</p>
                <div>
                    <Link href={`/item/update/${singleItem._id}`}>編集</Link>
                    <Link href={`/item/delete/${singleItem._id}`}>削除</Link>
                </div>
            </div>
        </div>
    )
}

export default ReadSingleItem