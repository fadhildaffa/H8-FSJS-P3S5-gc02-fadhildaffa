
import NavbarLogin from "@/app/components/NavbarLogin"
import { listProduct } from "@/db/models/product"
import GetDetail from "@/csr/GetDetail";
type Product = {
    statusCode?: number;
    message?: string;
    data: listProduct;
}

let baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export default async function DetailPage({ params }: { params: { slug: string } }) {
   
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
let formatTags = data.tags.map((el, idx) => {
    return (
        <span className='font-bold text-md bg-slate-400 rounded-full px-4 py-1 text-black' key={idx}>{el}</span>
    )
})
// console.log(data, "<<< ini data")

    return (
        <>
            <NavbarLogin />
            <GetDetail image={data?.images} />
            {/* nama dan excerpt */}
            <div className="flex">
                <div className="flex-auto w-64 pl-4">
                    <h1 className="font-bold text-3xl py-3">
                        {data?.name}
                    </h1>
                    <p>
                        {data?.excerpt}
                    </p>
                    <div className="flex my-3 gap-4">
                   {formatTags}
                    </div>
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