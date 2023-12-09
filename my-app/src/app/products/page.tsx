"use client"
import Link from "next/link"
import Image from "next/image"
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
type getSearchType = () => any
let baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export default function Products() {
    const [search, setSearch] = useState("")
    const [products, setProducts] = useState([])
    // const { data } = await getProducts()


    const fetchProducts = async () => {
        try {
            const response = await fetch(baseUrl + "/api/products?search=&limit=", {
                method: 'GET',
                cache: 'no-store'
            })
            const { data } = await response.json()
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

   
    const handleSearch = async () => {
        // const b = formD
        try {
            const response = await fetch(baseUrl + `/api/products?search=${search}&limit=`, {
                method: "GET",
                cache: "no-store"
            });
            const {data} = await response.json();
            setProducts(data)
            // console.log(result, "<<< isi result")
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
            <div className="navbar bg-gray-100">
                <div>
                    <div className="flex-1 pl-4">
                        <Link href="/">
                            <Image src="/images/logoC02.png" alt="cOlx" width={50} height={50} />
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center content-center w-screen gap-4">
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" className="input input-bordered w-6/12" />
                    <div className="border-solid border-2 border-zinc-950">
                        <Image src="/images/search.png" alt="cOlx" width={35} height={35} onClick={handleSearch} />
                    </div>
                    <div>
                        <Link href="/whislist">
                            <h3 className="text-red-600 font-bold">
                                Whislist
                            </h3>
                        </Link>
                    </div>
                </div>
                <div className="gap-5 mr-10">
                    <h3 className="font-bold underline" >
                        <Link href="/login">
                            Login
                        </Link>
                    </h3>
                    <h3 className="font-bold underline">
                        <Link href="/register">
                            Daftar
                        </Link>
                    </h3>
                </div>
                <div className="gap-5 mr-10">
                    <button className="btn btn-error">Logout</button>
                </div>
            </div>
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