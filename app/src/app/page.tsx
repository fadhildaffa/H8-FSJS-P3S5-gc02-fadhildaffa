import Image from "next/image"
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="navbar bg-gray-100">
        <div>
          <div className="flex-1 pl-4">
            <Image src="/images/logoC02.png" alt="cOlx" width={50} height={50} />
          </div>
        </div>
        <div className="flex justify-center content-center w-screen gap-4">
          <input type="text" placeholder="Search" className="input input-bordered w-6/12" />
          <div className="border-solid border-2 border-zinc-950">
            <Image src="/images/search.png" alt="cOlx" width={35} height={35} />
          </div>
        </div>
        <div className="gap-5 mr-10">
          <h3 className="font-bold" >
            <Link href="/login">
              Login
            </Link>
          </h3>
          <h3 className="font-bold">
            Daftar
          </h3>
        </div>
      </div>
    </>
  )
}
