
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type ProtectedProps = {
    children: React.ReactNode
}

export const PageProtected = ({children}: ProtectedProps) => {
    const cookieStore = cookies();
    const token = cookieStore.get('Authorization');
    
    if(!token){
        redirect('/login')
    }

    return <>{children}</>
}