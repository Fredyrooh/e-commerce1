import { User } from "../interfaces/user.interfaces"

require('dotenv').config()
const jwt = require('jsonwebtoken')

const validateToken = (token:object) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

const generateToken = (payload:object) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2d' })
}

const genereteAndValidate = async({_id,name,email}:any)=>{
    const newToken = await generateToken({ _id,name,email })
    const validToken = await validateToken(newToken)
    return validToken
}


export { validateToken, generateToken, genereteAndValidate }