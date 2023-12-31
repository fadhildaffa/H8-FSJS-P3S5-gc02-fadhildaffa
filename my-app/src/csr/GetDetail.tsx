"use client"
import { ObjectId } from "mongodb";
import Link from "next/link"
import { FaRegHeart} from "react-icons/fa6";
import Swal from "sweetalert2";
type Data = {
    image: string[],
    ProductId: ObjectId
}
let baseUrl = process.env.NEXT_PUBLIC_BASE_URL
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
            text: 'Success Remove from Whislist',
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
export default function GetDetail({image, ProductId}: Data) {
    
    return (
        <>
        <div className="p-5">
                <div className="carousel w-full" style={{ height: '30em' }}>
                    <div id="slide1" className="carousel-item relative w-full relative">
                        <div className="border border-white rounded-full bg-white absolute right-0 mr-3 p-2" onClick={() => addWhislist(ProductId.toString())}>
                         <FaRegHeart size={30} color={"black"} />
                        </div>
                        <img src={image[0]} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="border border-white rounded-full bg-white absolute right-0 mr-3 p-2">
                            <Link href='/whislist'> <FaRegHeart size={30} color={"black"} /></Link>
                        </div>
                        <img src={image[1]} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full relative">
                        <div className="border border-white rounded-full bg-white absolute right-0 mr-3 p-2">
                            <Link href='/whislist'> <FaRegHeart size={30} color={"black"} /></Link>
                        </div>
                        <img src={image[2]} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full relative">
                        <div className="border border-white rounded-full bg-white absolute right-0 mr-3 p-2">
                            <Link href='/whislist'> <FaRegHeart size={30} color={"black"} /></Link>
                        </div>
                        <img src={image[3]} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full relative">
                        <div className="border border-white rounded-full bg-white absolute right-0 mr-3 p-2">
                            <Link href='/whislist'> <FaRegHeart size={30} color={"black"} /></Link>
                        </div>
                        <img src={image[4]} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}