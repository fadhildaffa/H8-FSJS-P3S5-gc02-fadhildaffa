'use client'
import { ObjectId } from "mongodb";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { FaMagnifyingGlass, FaHeart, FaRegHeart, FaArrowRight } from "react-icons/fa6";
import Swal from 'sweetalert2'

type Props = {
  products: {
    _id: any;
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    price: number;
    tags: string[];
    thumbnail: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
  },
  addWhislist?: any
}

export default function ProductCards({ products, addWhislist }: Props) {
  // console.log(products, "<<< boleh")
  // console.log(products, "<< products")
   const navigation = useRouter()
  const rupiah = (number: any): any => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  let name = products.name?.split(" ");
  let formatName
  if(name){
    formatName= `${name[0]} ${name[1]}`;
  }else{
    formatName = ""
  }

  const changeDate = (date: string): any => {
    const data = new Date(date)
    const day = data.toLocaleString("default", { day: '2-digit' })
    const month = data.toLocaleString("default", { month: 'short' })
    const year = data.toLocaleString("default", { year: 'numeric' })

    const format = `${day} ${month} ${year}`

    return format
  }

  const handleAddWhislist: any = async (productId: ObjectId) => {
    try {
    const removeWhilist = await addWhislist(productId);
    if(removeWhilist === "Done"){
      Swal.fire({
        title: 'Success',
        text: 'Success Remove from Whislist',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      navigation.refresh()
    }else{
      Swal.fire({
        title: 'Success',
        text: 'Success added to Whislist',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      navigation.refresh()
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


  return (
    <>
    {Object.keys(products).length !== 0 ? <div className="card w-96 bg-base-100 shadow-xl border border-zinc-500 p-3 relative">
        <div className="border border-white rounded-full bg-white absolute right-0 mr-3 p-2" onClick={() => handleAddWhislist(products._id)}>
          <FaRegHeart size={30} color={"black"}/>
        </div>
        <Link href={`/products/${products.slug}`}>
          <figure><img src={products.thumbnail} alt={products.name} style={{ height: "15em" }} /></figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-xl">
              {formatName} {rupiah(products.price)}
            </h2>
            <p>{products.name.split(' ')[2]}</p>
            <p className="text-slate-400">{products.description?.slice(0, 50)}...</p>
            <div className="card-actions justify-end">
              <div >{changeDate(products.createdAt)}</div>
            </div>
          </div>
        </Link>
      </div>
      : <> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> </>
}
      

    </>
  )
}