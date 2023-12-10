import Image from "next/image"
import Link from "next/link"
import { ErrorClient } from "../components/ErrorClient";
import { myResponse } from "../register/page";
import { redirect } from "next/navigation";
import { cookies } from 'next/headers';
let baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export default function Login() {

    const handleLogin = async (formData: FormData) => {
        "use server"
        const email = formData.get("email")
        const password = formData.get("password")
        
        const response = await fetch(baseUrl + "/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const result = (await response.json()) as myResponse <{
            access_token: string
        }>

        if(!response.ok) return redirect("/login?error=" + result.message)

        if(result.data) cookies().set('Authorization', `Bearer ${result.data.access_token}`)
        // console.log(result, "<<<< ini apa?")

        return redirect("/")
    }

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
            <div className="flex items-center justify-center pt-10">
                <Image src="/images/logoC02.png" alt="cOlx" width={300} height={300} />
            </div>
            <div className="flex justify-center">
                <ErrorClient />
            </div>
            <div className="flex items-center justify-center w-screen">
                <div className="flex flex-col items-center justify-center w-96">
                    <form action={handleLogin}>
                        <div className="flex-col w-full pb-5 ">
                            <label>Email</label>
                            <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                        </div>
                        <div className="flex-col w-full pb-7">
                            <label >Password</label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" />
                        </div>
                        <button type="submit" className="btn btn-info w-full mb-7">Login</button>
                    </form>
                    <div className="flex-col w-full pb-7 ml-16">
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
        </>
    )
}