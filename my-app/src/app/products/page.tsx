
import { cookies } from "next/headers";
import NavbarLogin from "../components/NavbarLogin"
import ProductCards from "../components/ProductCard"

import { listProduct } from "@/db/models/product"

type Product = {
    statusCode?: number;
    message?: string;
    data?: listProduct[];
}

let baseUrl = process.env.BASE_URL as string

export async function getProducts(): Promise<Product> {
    'use server'
    const response = await fetch(baseUrl+ "/api/products", {
        method: 'GET',
        cache: 'no-store'
    })
    const result = await response.json()

    return result
}

export default async function Products() {
    const { data } = await getProducts()

    return (
        <>
            <NavbarLogin />
            <div className="flex flex-wrap gap-3 justify-around p-6">
                {data?.map((el, idx) => (
                    <ProductCards products={el} key={idx} />
                ))}
            </div>
            <div className="flex justify-end pr-10 pr-56">
                <div className="join">
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                </div>
            </div>

        </>
    )
}