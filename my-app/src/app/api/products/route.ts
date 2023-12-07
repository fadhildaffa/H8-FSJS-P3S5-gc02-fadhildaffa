import { getProducts7, getProducts } from "@/db/models/product"

export async function GET(request: Request) {
    try {
        const products = await getProducts7();
        const getAll = await getProducts();
        return Response.json({
            statusCode: 200,
            message: "message from /api/products",
            data: products,
            data1: getAll
        },{
            status: 200
        })
    }catch(err){

    }
}