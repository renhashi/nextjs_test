import { NextResponse } from "next/server"
import { SignJWT } from "jose"
import connectDB from "../../../utils/database"
import { UserModel } from "../../../utils/schemaModels"

export async function POST(request){
    const reqBody = await request.json()
    try{
        await connectDB()
        const saveUserData = await UserModel.findOne({ email: reqBody.email })
        console.log(saveUserData)
        if(saveUserData){
            if(saveUserData.password === reqBody.password){
                //パスワードが正しい場合
                const secretKey = new TextEncoder().encode("next-market-app-book")
                const payload = {
                    email: reqBody.email
                }
                const token = await new SignJWT(payload)
                    .setProtectedHeader({alg: "HS256"})
                    .setExpirationTime("1d")
                    .sign(secretKey)
                
                console.log(token)
                return NextResponse.json({message: "ログイン成功", token: token})
            } else {
                //パスワードが間違っている場合
                return NextResponse.json({message: "ログイン失敗:パスワードが間違っています"})
            }
            
        }else{
            //ユーザが存在しない場合
            return NextResponse.json({message: "ログイン失敗:ユーザー登録してください"})
        }
        
    }catch(error){
        console.error(error)
        return NextResponse.json({message: "ログイン失敗"})
    }    
}