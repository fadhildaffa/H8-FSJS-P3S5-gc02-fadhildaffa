import { getProducts7 } from "@/db/models/product"

export async function GET(request: Request) {
    try {
        const products = await getProducts7()
        return Response.json({
            statusCode: 200,
            message: "message from /api/products",
            data: products
        },{
            status: 200
        })
    }catch(err){

    }
}