'use client'
import Image from "next/image"
import Link from "next/link"
import { MouseEvent, MouseEventHandler, useState } from "react"
import { listProduct } from "@/db/models/product"
let baseUrl = process.env.NEXT_PUBLIC_BASE_URL
import Products from "../products/page"

type Product = {
    statusCode?: number;
    message?: string;
    data?: listProduct[] 
  }


export default function NavbarLogin() {
    const [search, setSearch] = useState("")
    const handleSearch = async () => {
        // const b = formD
        try {
            const response = await fetch(baseUrl + `/api/products?search=${search}&limit=`, {
                method: "GET",
                cache: "no-store"
            });
            const {data} = await response.json();
           
            // console.log(result, "<<< isi result")
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(search, "<< berubah")
    return (
        <div className="navbar bg-gray-100">
            <div>
                <div className="flex-1 pl-4">
                    <Link href="/">
                        <Image src="/images/logoC02.png" alt="cOlx" width={50} height={50} />
                    </Link>
                </div>
            </div>
            <div className="flex justify-center content-center w-screen gap-4">
                <input type="text" placeholder="Search" className="input input-bordered w-6/12" />
                <div className="border-solid border-2 border-zinc-950">
                    <Image src="/images/search.png" alt="cOlx" width={35} height={35} />
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
    )
}