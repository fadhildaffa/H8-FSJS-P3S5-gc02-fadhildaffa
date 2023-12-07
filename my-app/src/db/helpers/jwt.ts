import jwt, { JwtPayload } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET as any

export const signToken = (payload: JwtPayload) => {
    

    return jwt.sign(payload, JWT_SECRET)
}