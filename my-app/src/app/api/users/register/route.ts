import { Register, getByEmailAndUsername } from "@/db/models/user";
import { NextResponse } from "next/server";
import { z } from "zod";

const User = z.object({
    email: z.string().email(),
    password: z.string().min(5)
})

export async function POST(request: Request) {
    try {
        const body: { name: string; username: string; email: string; password: string } = await request.json();

        const validate = User.safeParse(body);

        if (!validate.success) throw validate.error

        const user = await getByEmailAndUsername(body.email, body.username);

        if (user.length > 0) {
            return NextResponse.json({
                message: "Email/Username already registered"
            },
                {
                    status: 401
                })

        }

        await Register({
            name: body.name,
            username: body.username,
            email: body.email,
            password: body.password
        })

        return NextResponse.json({
            message: "register sucessfully"
        }, {
            status: 201
        })

    } catch (error) {
        if (error instanceof z.ZodError) {
            const errPath = error.issues[0].path[0];
            const errMessage = error.issues[0].message;

            return NextResponse.json(
                {
                    message: `${errPath} ${errMessage.toLowerCase()}`
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