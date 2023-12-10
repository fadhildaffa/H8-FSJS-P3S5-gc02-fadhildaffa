import { comparePassword } from "@/db/helpers/bcrypt";
import { getByEmail } from "@/db/models/user";
import { NextResponse } from "next/server";
import { z } from "zod";
import { signToken } from "@/db/helpers/jwt";
const User = z.object({
    email: z.string().email(),
    password: z.string().min(5)
})

export async function POST(request: Request) {
    try {
        const body: { email: string; password: string } = await request.json();

        const validate = User.safeParse(body);

        if (!validate.success) throw validate.error

        const user = await getByEmail(body.email)

        if (!user) return NextResponse.json({ message: "Invalid Email/Password" }, { status: 401 })

        const isValidPwd = comparePassword(body.password, user.password)
        

        if (!isValidPwd) return NextResponse.json({ message: "Invalid Email/Password" }, { status: 401 })

        const access_token = signToken({
            _id: user._id,
            email: user.email
        })

      const response = NextResponse.json(
            {
                message: "Login sucessfully",
                data: {
                    access_token
                }
            },
            {
                status: 201
            }
        )

        response.cookies.set('Authorization', `Bearer ${access_token}`)

        return response



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