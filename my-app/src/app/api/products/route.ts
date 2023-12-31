import { getProducts } from "@/db/models/product"
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        let limit;
        let search;
        let page;
        const { searchParams } = new URL(request.url)
        limit = searchParams.get('limit') as string
        search = searchParams.get('search') as string
        page = searchParams.get('page') as string
        // console.log(search, "<< ini search")
        if(!page) page = 1
        if(!limit) {
            limit = "9"
        }
        // console.log(limit, "<< limit")
        // const products = await getProducts7();
        const getAll = await getProducts({limit, search, page});
        // console.log(getAll, "<<< hasil dari api")
        return NextResponse.json({
            statusCode: 200,
            message: "message from /api/products",
            data: getAll
        },{
            status: 200
        })
    }catch(err){
        console.log(err, "err")

    }
}