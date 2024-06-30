import jsonwebtoken from "jsonwebtoken"
// const jsonwebtoken = require("jsonwebtoken")
const jwtSecret = process.env.NEXT_PUBLIC_APP_JWT_SECRET

export const createJWT = ({payload}) => {
    const token = jsonwebtoken.sign(payload, jwtSecret, {expiresIn : "1h"});
    return token
}

export const isTokenValid = ({token}) => jsonwebtoken.verify(token, jwtSecret)

