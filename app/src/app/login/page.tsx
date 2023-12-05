import Image from "next/image"
import Link from "next/link"
export default function Login() {
    return (
        <>
            <div className="flex items-center justify-center pt-10">
                <Image src="/images/logoC02.png" alt="cOlx" width={300} height={300} />
            </div>
            <div className="flex items-center justify-center w-screen">
                <div className="flex flex-col items-center justify-center w-96">
                    <div className="flex-col w-full pb-5 ">
                        <label>Email</label>
                        <input type="text" placeholder="Email" className="input input-bordered w-full" />
                    </div>
                    <div className="flex-col w-full pb-7">
                        <label >Password</label>
                        <input type="password" placeholder="Password" className="input input-bordered w-full" />
                    </div>
                    <button className="btn btn-info w-full mb-7">Login</button>
                    <div className="flex-col w-full pb-7">
                        <span>
                            Belum mempunyai akun?
                        </span>
                        <Link href="/register"> <span className="font-bold ml-1 text-sky-400 underline">
                            Register
                        </span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <form action="">
                <div className="gap-5">
                    <div className="flex items-center justify-center md:item-start mr-72 ml-3">
                        <label >Email</label>
                    </div>
                    <div className="flex items-center justify-center md:item-start">
                        <input type="text" placeholder="Email" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className="flex items-center justify-center md:item-start mr-60">
                        <label >Password</label>
                    </div>
                    <div className="flex items-center justify-center md:item-start">
                        <input type="password" placeholder="Password" className="input input-bordered input-md w-full max-w-xs" />
                    </div>
                    <div className="flex items-center justify-center w-24 md:item-start">
                    <button className="btn btn-info w-full">Login</button>
                    </div>
                </div>
            </form> */}
        </>
    )
}