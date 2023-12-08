
import NavbarLogin from "@/app/components/NavbarLogin"
import { listProduct } from "@/db/models/product"
import { FaMagnifyingGlass, FaHeart, FaRegHeart, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { cookies } from "next/headers";
type Product = {
    statusCode?: number;
    message?: string;
    data?: listProduct;
}
let baseUrl = process.env.BASE_URL as string

export default async function DetailPage({ params }: { params: { slug: string } }) {
    // const { searchParams } = new URL(request.url)
    // const id = searchParams.get('id')
    // console.log(params, "<<< ini ada gk?")

    async function getProduct(): Promise<Product> {
        'use server'
        const response = await fetch(`${baseUrl}/api/products/${params.slug}`, {
            method: 'GET',
            cache: 'no-store'
        })
        const result = await response.json()

        return result
    }
    const { data } = await getProduct();

    const rupiah = (number: any): any => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }



    return (
        <>
            <NavbarLogin />
            <div className="p-5">
                <div className="carousel w-full" style={{ height: '30em' }}>
                    <div id="slide1" className="carousel-item relative w-full relative">
                        <div className="border border-white rounded-full bg-white absolute right-0 mr-3 p-2">
                            <Link href='/whislist'> <FaRegHeart size={30} color={"black"} /></Link>
                        </div>
                        <img src={data?.images[0]} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="border border-white rounded-full bg-white absolute right-0 mr-3 p-2">
                            <Link href='/whislist'> <FaRegHeart size={30} color={"black"} /></Link>
                        </div>
                        <img src={data?.images[1]} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full relative">
                        <div className="border border-white rounded-full bg-white absolute right-0 mr-3 p-2">
                            <Link href='/whislist'> <FaRegHeart size={30} color={"black"} /></Link>
                        </div>
                        <img src={data?.images[2]} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full relative">
                        <div className="border border-white rounded-full bg-white absolute right-0 mr-3 p-2">
                            <Link href='/whislist'> <FaRegHeart size={30} color={"black"} /></Link>
                        </div>
                        <img src={data?.images[3]} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full relative">
                        <div className="border border-white rounded-full bg-white absolute right-0 mr-3 p-2">
                            <Link href='/whislist'> <FaRegHeart size={30} color={"black"} /></Link>
                        </div>
                        <img src={data?.images[4]} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* nama dan excerpt */}
            <div className="flex">
                <div className="flex-auto w-64 pl-4">
                    <h1 className="font-bold text-3xl py-3">
                        {data?.name}
                    </h1>
                    <p>
                        {data?.excerpt}
                    </p>
                    <h2 className="font-bold text-3xl pt-10">
                        Deskripsi
                    </h2>
                    <hr />
                    <p className="py-3">
                        {data?.description}
                    </p>
                </div>
                <div className="flex-auto w-32 pl-5">
                    <h2 className="font-bold text-3xl py-3">
                        {rupiah(data?.price)}
                    </h2>
                </div>
            </div>
        </>
    )
} 