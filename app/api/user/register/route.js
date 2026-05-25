import { NextResponse } from "next/server";
import connectDB from "../../../utils/database"
import { UserModel } from "../../../utils/schemaModels"

export async function POST(request) {
    const ReqBody = await request.json()
    try {
        await connectDB()
        await UserModel.create(ReqBody)
        return NextResponse.json({message: "ユーザ登録成功"})
    } catch (error) {
        console.error(error)
        return NextResponse.json({message: "ユーザ登録失敗"})
    }
}