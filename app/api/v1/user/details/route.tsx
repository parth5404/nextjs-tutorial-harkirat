import { NextRequest, NextResponse } from "next/server";



export function GET(){
    return NextResponse.json({
            user:"Sher"
    })
}


export async function POST(req:NextRequest){
    const data=await req.json()
    console.log(data)
    return NextResponse.json({
        user:"Khiladi 786"
    })
}