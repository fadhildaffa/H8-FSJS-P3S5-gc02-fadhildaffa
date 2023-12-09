import { cookies } from "next/headers";
import NavbarLogin from "../components/NavbarLogin"
import ProductCards from "../components/ProductCard"

import { mineWhislist, userWhislist } from "@/db/models/whislist";
type Whislist = {
    statusCode?: number;
    message?: string;
    data?: mineWhislist[] 
  }
  let baseUrl = process.env.NEXT_PUBLIC_BASE_URL
async function getWhislists(): Promise<Whislist>{
    'use server'
    const response = await fetch(baseUrl + "/api/whistlists", {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Cookie: cookies().toString()
      }
    })
    const result = await response.json()
    // console.log(result, "<< hasil dari client")
  
    return result
  }

export default async function () {
    const {data} = await getWhislists()
    console.log(data, "<<< ini datanya")
    return (
        <>
            <NavbarLogin />
            <div className="flex flex-row gap-5 flex-wrap p-6">
                {/* <ProductCards products={data} /> */}
            </div>
        </>
    )
}