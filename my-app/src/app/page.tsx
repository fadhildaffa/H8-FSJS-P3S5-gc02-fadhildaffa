import Image from "next/image"
import Link from 'next/link'
import ProductCards from "./components/ProductCard"

export default function Home() {
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
          <input type="text" placeholder="Search" className="input input-bordered w-6/12" />
          <div className="border-solid border-2 border-zinc-950">
            <Image src="/images/search.png" alt="cOlx" width={35} height={35} />
          </div>
          <h3 className="font-bold underline text-sky-400">
            E-commerce Info
          </h3>
        </div>
        <div className="gap-5 mr-10">
          <h3 className="font-bold" >
            <Link href="/login">
              Login
            </Link>
          </h3>
          <h3 className="font-bold">
            <Link href="/register">
              Daftar
            </Link>
          </h3>
        </div>
      </div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://media.karousell.com/media/photos/products/2021/12/21/free_ongkir_1640094373_8dd26f0e_progressive.jpg" className="w-full" style={{ height: "18rem" }} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://res.cloudinary.com/dlqcki8m5/image/upload/v1701834106/frcfhtrrzl3rjfqardf2.jpg" className="w-full" style={{ height: "18rem" }} />
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
      <div className="flex flex-row gap-5 flex-wrap p-6">
      <ProductCards/>
      </div>
    </>
  )
}
