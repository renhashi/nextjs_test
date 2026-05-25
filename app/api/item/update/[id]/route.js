import { NextResponse } from "next/server"
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"

export async function PUT(request, context){
    const reqBody = await request.json()
    const {id} = await context.params
    try{
        await connectDB()
        const singleItem = await ItemModel.findById(id)
        if(singleItem.email === reqBody.email){
            //アイテムの出品者とリクエストを送ってきたユーザが同じ場合は編集可能
            await ItemModel.updateOne({_id: id},  reqBody)
            return NextResponse.json({message: "アイテム編集成功"})
        }else{
            return NextResponse.json({message: "アイテム編集失敗:出品者以外は編集できません"})
        }
        //console.log(reqBody)
        //console.log(id)
    } catch (error) {
        console.error(error)
        return NextResponse.json({message: "アイテム編集失敗"})
    }
    
}