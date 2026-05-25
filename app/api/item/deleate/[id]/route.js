import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"

export async function DELETE(request, context){
    const {id} = await context.params
    try{
        await connectDB()
        const singleItem = await ItemModel.findById(id)
        if(singleItem.email === reqBody.email){
            //アイテムの出品者とリクエストを送ってきたユーザが同じ場合は削除可能
            await ItemModel.deleteOne({_id: id})
            return NextResponse.json({message: "アイテム削除成功"})
        }else{
            return NextResponse.json({message: "アイテム削除失敗:出品者以外は削除できません"})
        }
    } catch (error) {
        console.error(error)
        return NextResponse.json({message: "アイテム削除失敗"})
    }
}