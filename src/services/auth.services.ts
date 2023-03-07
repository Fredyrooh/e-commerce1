import { Auth } from "../interfaces/auth.interfaces";
import { User } from "../interfaces/user.interfaces";
import UserModel from "../models/Users";
import { encript, verified} from "../utils/bcrypt.handle";
import { generateToken, validateToken } from "../utils/jwt.handle";

class AuthServices{

    static async register ({ email, password, name}: User){
        const findUser = await UserModel.findOne({email})
        if(findUser) return 'ALREDY_USER'
        const passHash = await encript(password)
        const newUser = await UserModel.create({email,password:passHash,name})
        return newUser
    }

    static async login ({email,password}: Auth) {
        const findUser = await UserModel.findOne({email})
        if(!findUser) return 'NOT_FOUND_USER'
        const passHash = findUser.password
        const checkPass = await verified(password,passHash)
        if(!checkPass) return checkPass
        return findUser
    }
}

export default AuthServices