import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyTokenJose } from './db/helpers/jwt';
 
// This function can be marked `async` if using `await` inside
type Decoded = {
  _id : string;
  email : string;
  iat : number;
}

export async function middleware(request: NextRequest) {
    
//     // console.log(request.url, "<< from middle")
//     if(request.url.includes('api/whistlists')){
//         const auth = cookies().get("Authorization");
//         // console.log(auth, "<< ini auth")
//         if(!auth) {
//           return NextResponse.json(
//             {
//               message: "Unauthenticated"
//             },
//             {
//               status: 401
//             }
//           )
//         }
//         const accessToken = auth.value.split(" ")[1];
//         const decoded = (await verifyTokenJose(accessToken)) as Decoded

//         const requestHeaders = new Headers(request.headers) 
//         requestHeaders.set('x-user-id', decoded._id)
//         requestHeaders.set('x-user-email', decoded.email)

//         const response = NextResponse.next({
//           request: {
//             headers: requestHeaders
//           }
//         })
//         return response
//         // console.log(typeof(decoded.iat), "<< ini decot")
//     }

    return NextResponse.next()
    
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/:path*'],
}