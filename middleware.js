import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request){
    console.log("middleware is running")
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGV4YW1wbGUuY29tIiwiZXhwIjoxNzc5NTI3NzIyfQ.TYx42i8ZogKqliy07naUrGlJIBowc48K0XAZOGfJyIM"
    //const token = await request.headers.get("authorization")?.split(" ")[1]
    if(!token){
        return NextResponse.json({message: "認証失敗:トークンがありません"})
    }

    try{
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const decodeJwt = await jwtVerify(token, secretKey)
        //console.log(decodeJwt)
        return NextResponse.next()
    }catch(error){
        console.error(error)
        return NextResponse.json({message: "認証失敗:トークンが無効です"})
    }
}

export const config = {
    matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
}