"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react";
import ProductCards from "../components/ProductCard"
import InfiniteScroll from 'react-infinite-scroll-component';
import { listProduct } from "@/db/models/product"
import Swal from 'sweetalert2'


type Product = {
    statusCode?: number;
    message?: string;
    data: listProduct[];
}

let baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export default function Products() {
    

    const [products, setProducts] = useState<listProduct[]>([]);
    const [search, setSearch] = useState("")
    const [scroll, setScroll] = useState(true)
    const [page, setPage] = useState(1);
    // const { data } = await getProducts()

    
    const fetchProducts = async () => {
        try {
            const response = await fetch(baseUrl + `/api/products?search=${search}&limit=&page=${page}`, {
                method: 'GET',
                cache: 'no-store'
            })

            const result: Product = await response.json();
            const newProducts: listProduct[] = result.data;

            setProducts([...products, ...newProducts]);
            if (products.length == 21) {
                setScroll(false);
            } else {
                setPage(page + 1);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    const handleSearch = async () => {
        // const b = formD
        try {
            const response = await fetch(baseUrl + `/api/products?search=${search}&limit=`, {
                method: "GET",
                cache: "no-store"
            });
            const { data } = await response.json();
            setProducts(data)
            // console.log(result, "<<< isi result")
        } catch (error) {
            console.log(error)
        }
    }

    const addWhislist = async (payload: string) => {
        const productId: (string) = payload;

        try {
         const add =  await fetch(`${baseUrl}/api/whistlists`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    productId
                }),
            }
        );
        if(add.status === 401) {
            Swal.fire({
                title: 'Error!',
                text: 'Please Loggin First',
                icon: 'error',
                confirmButtonText: 'OK'
              })
        }else if (add.status === 201){
                Swal.fire({
                  title: 'Success',
                  text: 'Added to Whislist',
                  icon: 'success',
                  confirmButtonText: 'OK'
                })
        }else if (add.status === 200){
            Swal.fire({
                title: 'Success',
                text: 'Success remove from whislist',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        }
        
        } catch (error) {
            
            Swal.fire({
                title: 'Error!',
                text: `${error}`,
                icon: 'error',
                confirmButtonText: 'OK'
              })
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
                <InfiniteScroll
                    dataLength={products.length}
                    next={fetchProducts}
                    hasMore={scroll}
                    loader={<><div className="flex flex-wrap gap-3 justify-around p-6"><p>Loading ....</p></div></>}
                    endMessage={<div className="flex flex-wrap gap-3 justify-around p-6"><p>end of page</p></div>}
                    scrollableTarget='parentScrollDiv'
                >
                    <div className="flex flex-wrap gap-3 justify-around p-6">
                        {products.map((el, idx) => (
                            <ProductCards addWhislist={addWhislist} products={el} key={idx} />
                        ))}
                    </div>
                </InfiniteScroll>
            </div>


        </>
    )
}