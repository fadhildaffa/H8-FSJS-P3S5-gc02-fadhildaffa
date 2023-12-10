import Image from "next/image"
import Link from "next/link"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import LogoutBtn from "./LogoutBtn"
import WhislistButton from "./ProtectingApp"




export default function NavbarLogin() {
    let isLoggingIn;
    let token = cookies().get("Authorization")
    // console.log(token, "<< berubah")
    if (token) {
        const valid = token.value.split(' ')[1]
        if (valid) {
            isLoggingIn = true
        } else {
            isLoggingIn = false
        }
    } else {
        isLoggingIn = false
    }
 const handleLogout = async () => {
        "use server"
        cookies().delete('Authorization')
        redirect('/')
    }

    const confirmed = async () => {
        "use server"
        redirect('/whislist');
      }
   

    return (
        <div className="navbar bg-gray-100">
            <div>
                <div className="flex-1 pl-4">
                    <Link href="/">
                        <Image src="/images/logoC02.png" alt="cOlx" width={50} height={50} />
                    </Link>
                </div>
            </div>
            <div className="flex justify-center content-center w-screen gap-4">
                <input type="text" placeholder="Search" className="input input-bordered w-6/12" />
                <div className="border-solid border-2 border-zinc-950">
                    <Image src="/images/search.png" alt="cOlx" width={35} height={35} />
                </div>
                <div>
                <WhislistButton isLoggingIn={isLoggingIn} confirmed={confirmed}/>
                </div>
            </div>
            {isLoggingIn ? <LogoutBtn logout={handleLogout} />: <div className="gap-5 mr-10">
                <h3 className="font-bold underline" >
                    <Link href="/login">
                        Login
                    </Link>
                </h3>
                <h3 className="font-bold underline">
                    <Link href="/register">
                        Daftar
                    </Link>
                </h3>
            </div>
            }
        </div>
    )
}