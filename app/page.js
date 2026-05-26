import Link from "next/link"
import Image from "next/image"

const getAllItems = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readall`, {cache: "no-store"})
    const result = await response.json()
    //console.log(result)
    const allItems = result.items
    return allItems
}

const ReadAllItem = async () => {
    const allItems = await getAllItems()
    //console.log(allItems)
    console.log(process.env.NEXT_PUBLIC_URL)
    return (
        <div>
            <h1 className="h1-style">アイテム全件取得</h1>
            <h3>全件取得</h3>
            {allItems.map(item => 
                <Link href={`/item/readsingle/${item._id}`} key={item._id}>
                    <Image src={item.image} width={750} height={500} alt="item-image" priority/>
                    <div>
                        <h2>{item.price}</h2>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default ReadAllItem