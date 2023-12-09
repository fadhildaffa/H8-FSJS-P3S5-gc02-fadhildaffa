import { comparePassword } from "@/db/helpers/bcrypt";
import { getByEmail } from "@/db/models/user";
import { NextResponse } from "next/server";
import { z } from "zod";
import { signToken } from "@/db/helpers/jwt";
import { addWhislist, deleteWhislist, getWhislists, getUserWishlist } from "@/db/models/whislist";


export async function GET(request: Request) {
    try {
        // console.log(request.headers.get('x-user-id'), "<< isinya")
        const userId = request.headers.get('x-user-id') as string
        const getWhislist = await getWhislists(userId)
        // console.log(getWhislist, "<< cek cuy")
        return NextResponse.json({
            statusCode: 200,
            message: "message from /api/products",
            data: getWhislist
        },{
            status: 200
        })



    } catch (error) {
        console.log(error, " ini error dari api")
        if (error instanceof z.ZodError) {
            const errPath = error.issues[0].path[0] as string;
            const errMessage = error.issues[0].message.replace("String ", "");

            return NextResponse.json(
                {
                    message: `${errPath.toUpperCase()} ${errMessage.toUpperCase()}`
                },
                {
                    status: 400
                }
            )
        }

        return NextResponse.json(
            {
                message: "Internal Server Error"
            },
            {
                status: 500
            }
        )
    }

}

export async function POST(request: Request) {
    try {
       
        const userId = request.headers.get('x-user-id') as string
 
        const body: { productId: string } = await request.json();

        const like = await getUserWishlist(userId)
        // console.log(like, "<< ini likenya")
        let isAny;
        if (like.length > 0) {
            isAny = like.find(el => el.productId.toString() === body.productId);
        }
        if(!isAny){

            await addWhislist(userId, body.productId)
    
            return NextResponse.json(
                {
                    message: "Added to whislist succesfully sucessfully",
                },
                {
                    status: 201
                }
            ) 
        }

      await deleteWhislist(userId, body.productId)
        // console.log(a, "<< deleting")
        return NextResponse.json(
            {
                message: "Success delete whislist",
            },
            {
                status: 200
            }
        ) 



    } catch (error) {
        if (error instanceof z.ZodError) {
            const errPath = error.issues[0].path[0] as string;
            const errMessage = error.issues[0].message.replace("String ", "");

            return NextResponse.json(
                {
                    message: `${errPath.toUpperCase()} ${errMessage.toUpperCase()}`
                },
                {
                    status: 400
                }
            )
        }

        return NextResponse.json(
            {
                message: "Internal Server Error"
            },
            {
                status: 500
            }
        )
    }

}