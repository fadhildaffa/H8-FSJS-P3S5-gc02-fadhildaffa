
import { NextResponse } from "next/server";
import { getProductSlug } from "@/db/models/product";



export async function GET(request: Request,  { params }: { params: { slug: string } }) {
    try {
        const slug = params.slug;

        const product = await getProductSlug(slug);
        
        
        return NextResponse.json({
            statusCode: 200,
            message: "message from /api/products/slug",
            data: product
        },{
            status: 200
        })
    }catch(err){
        console.log(err, "err")

    }
}