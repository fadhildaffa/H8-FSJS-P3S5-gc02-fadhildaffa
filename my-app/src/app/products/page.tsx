"use client"
import { useEffect, useState } from "react";
import NavbarLogin from "../components/NavbarLogin"
import ProductCards from "../components/ProductCard"
// import { getProducts } from "@/ssr/products";

import { listProduct } from "@/db/models/product"


type Product = {
    statusCode?: number;
    message?: string;
    data?: listProduct[];
}

let baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export default function Products() {
    // const { data } = await getProducts()

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await fetch(baseUrl + "/api/products", {
                method: 'GET',
                cache: 'no-store'
            })
            const {data} = await response.json()
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    // console.log(products, "<< isinya apa?")


    return (
        <>
            <NavbarLogin />
            <div className="flex flex-wrap gap-3 justify-around p-6">
                {products.map((el, idx) => (
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