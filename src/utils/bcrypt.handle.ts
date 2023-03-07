import { compare, hash } from "bcrypt"

const encript =async (pass:string) => {
    const hashPass= await hash(pass, 8)
    return hashPass
}

const verified = async ( pass: string,passHash: string)=>{
    const checkPass = await compare(pass,passHash)
   return checkPass 
}

export {verified, encript}