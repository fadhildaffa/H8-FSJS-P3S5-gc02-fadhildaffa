import Link from 'next/link'
import ProductCards from "./components/ProductCard"
import { listProduct } from "@/db/models/product"
import NavbarLogin from "./components/NavbarLogin"

type Product = {
  statusCode?: number;
  message?: string;
  data?: listProduct[] 
}

let baseUrl = process.env.NEXT_PUBLIC_BASE_URL

async function getProducts(): Promise<Product>{
  'use server'
  const response = await fetch(baseUrl + "/api/products?limit=7&search=", {
    method: 'GET',
    cache: 'no-store'
  })
  const result = await response.json()

  return result
} 

export default async function Home() {
 
  
  const {data} = await getProducts()
  // console.log(data, "<<< ini data")
  

  return (
    <>
      <NavbarLogin />
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://res.cloudinary.com/dlqcki8m5/image/upload/v1701834106/frcfhtrrzl3rjfqardf2.jpg" className="w-full" style={{ height: "18rem" }} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://media.karousell.com/media/photos/products/2021/12/21/free_ongkir_1640094373_8dd26f0e_progressive.jpg" className="w-full" style={{ height: "18rem" }} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://cdn.pixabay.com/photo/2015/09/20/08/04/megaphone-948015_1280.jpg" className="w-full" style={{ height: "18rem" }} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-between p-6">
        {/* {data?.map((el, idx) =>(
          <ProductCards products={el} key={idx} />
        ))} */}
      </div>
      <div className="flex justify-center p-5">
        <Link href="/products">
          <button className="btn btn-active btn-ghost btn-wide">See All</button>
        </Link>
      </div>
    </>
  )
}
