import { NextResponse } from "next/server"
import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"

export async function GET(){
    try{
        await connectDB()
        const allItems = await ItemModel.find()
        return NextResponse.json({message: "アイテム全件取得", items: allItems})
    }catch(error){
        console.error(error)
        return NextResponse.json({message: "アイテム全件取得失敗"})
    }
}

export const revalidate = 0