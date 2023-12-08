
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    try {
       
        const { searchParams } = new URL(request.url)
        const slug = searchParams.get('slug') as string
        
        // console.log(limit, "<< limit")
        // const products = await getProducts7();
        
        
        return NextResponse.json({
            statusCode: 200,
            message: "message from /api/products/slug",
        },{
            status: 200
        })
    }catch(err){
        console.log(err, "err")

    }
}