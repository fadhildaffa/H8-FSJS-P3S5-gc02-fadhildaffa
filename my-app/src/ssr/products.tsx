
import { listProduct } from "@/db/models/product"

type Product = {
    statusCode?: number;
    message?: string;
    data?: listProduct[];
}

let baseUrl = process.env.BASE_URL as string

export async function getProducts(): Promise<Product> {
    const response = await fetch(baseUrl+ "/api/products", {
        method: 'GET',
        cache: 'no-store'
    })
    const result = await response.json()

    return result
}