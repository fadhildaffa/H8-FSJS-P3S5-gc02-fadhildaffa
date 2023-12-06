import Image from "next/image"
import Link from "next/link"
export default function Register() {
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
            </div>
            <div className="flex items-center justify-center pt-2">
                <Image src="/images/logoC02.png" alt="cOlx" width={300} height={300} />
            </div>
            <form action="">
                <div className="flex items-center justify-center w-screen">
                    <div className="flex flex-col items-center justify-center w-96">
                        <div className="flex-col w-full pb-5 ">
                            <label>Name</label>
                            <input type="text" placeholder="Email" className="input input-bordered w-full" />
                        </div>
                        <div className="flex-col w-full pb-5">
                            <label >Username</label>
                            <input type="text" placeholder="Password" className="input input-bordered w-full" />
                        </div>
                        <div className="flex-col w-full pb-5 ">
                            <label>Email</label>
                            <input type="text" placeholder="Email" className="input input-bordered w-full" />
                        </div>
                        <div className="flex-col w-full pb-5">
                            <label >Password</label>
                            <input type="password" placeholder="Password" className="input input-bordered w-full" />
                        </div>
                        <button className="btn btn-info w-full mb-5">Register</button>
                        <div className="flex-col w-full pb-5">
                            <span>
                                Sudah mempunyai akun?
                            </span>
                            <Link href="/login"> <span className="font-bold ml-1 text-sky-400 underline">
                                Login
                            </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}