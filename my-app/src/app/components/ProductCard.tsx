import Link from "next/link"
import { FaMagnifyingGlass, FaHeart, FaRegHeart, FaArrowRight } from "react-icons/fa6";

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
  }
}

export default function ProductCards({ products }: Props) {
  // console.log(products, "<<< boleh")
  const rupiah = (number: any): any => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  const changeDate = (date: string): any => {
    const data = new Date(date)
    const day = data.toLocaleString("default", { day: '2-digit' })
    const month = data.toLocaleString("default", { month: 'short' })
    const format = `${day} ${month}`

    return format
  }



  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl border border-zinc-500 p-3 relative">
        <div className="border border-white rounded-full bg-white absolute right-0 mr-3 p-2">
          <Link href='/whislist'> <FaRegHeart size={30} color={"black"} /></Link>
        </div>
        <Link href={`/products/${products.slug}`}>
          <figure><img src={products.thumbnail} alt="Shoes" style={{ height: "15em" }} /></figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-xl">
              {rupiah(products.price)}
            </h2>
            <p>{products.name.split(' ')[2]}</p>
            <p className="text-slate-400">{products.description.slice(0, 50)}...</p>
            <div className="card-actions justify-end">
              <div >{changeDate(products.createdAt)}</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}