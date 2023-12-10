import { cookies } from "next/headers";
import NavbarLogin from "../components/NavbarLogin"
import ProductCards from "../components/ProductCard"
import { mineWhislist, userWhislist } from "@/db/models/whislist";


type Whislist = {
    statusCode?: number;
    message?: string;
    data: mineWhislist
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
  const addWhislist = async (payload: string) => {
    'use server'
  
    const productId: (string) = payload;

    try {
    await fetch(`${baseUrl}/api/whistlists`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookies().toString()
            },
            body: JSON.stringify({
                productId
            }),
        }
    );
    
   return "Done"
    } catch (error) { 
        // console.log(error, "<< ini errornya")
    }
  }
export default async function () {
    const {data} = await getWhislists()
    // console.log(data.wishlists, "<<< ini datanya")
    return (
        <>
            <NavbarLogin />
            <div className="flex flex-row gap-5 flex-wrap p-6">
              {data.wishlists ? data.wishlists.map((el, idx) => (
                <ProductCards addWhislist={addWhislist} products={el} key={idx}/>
              )) : <> </>}
            </div>
        </>
    )
}