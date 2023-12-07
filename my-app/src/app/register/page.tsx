import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation";
import { ErrorClient } from "../components/ErrorClient";

export type myResponse <T = {}> =  {
    message?: string;
    data?: T;
}
export default function Register() {


    const handleRegister = async (formData: FormData) => {
        "use server"
        const name = formData.get('name');
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');

        const response = await fetch("http://localhost:3000/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                username,
                email,
                password
            })
        });

        const result = (await response.json()) as myResponse

        if(!response.ok) return redirect("/register?error=" + result.message)

        

        return redirect("login")

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
            <div className="flex items-center justify-center pt-2">
                <Image src="/images/logoC02.png" alt="cOlx" width={300} height={300} />
            </div>
            <div className="flex justify-center">
            <ErrorClient />
            </div>
            <div className="flex items-center justify-center w-screen pt-5">
                <div className="flex flex-col items-center justify-center w-96">
                    <form action={handleRegister}>
                        <div className="flex-col w-full pb-5 ">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full" />
                        </div>
                        <div className="flex-col w-full pb-5">
                            <label >Username</label>
                            <input type="text" name="username" placeholder="input username" className="input input-bordered w-full" />
                        </div>
                        <div className="flex-col w-full pb-5 ">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" />
                        </div>
                        <div className="flex-col w-full pb-5">
                            <label >Password</label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" />
                        </div>
                        <button type="submit" className="btn btn-info w-full mb-5">Register</button>
                    </form>
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
            </div >

        </>
    )
}