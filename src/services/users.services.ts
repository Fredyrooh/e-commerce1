import { User } from "../interfaces/user.interfaces"
import UserModel from "../models/Users"

class UserServices {

    static async getOne (id:string){
        const user = await UserModel.findOne({_id:id})
        return user
    }
    
    static async getAll (){
        const user = await UserModel.find().sort({name:1})
        return user
    }
    
    static async update(id:string, data:User){
        const user = await UserModel.findOneAndUpdate({ _id:id }, data, { new:true })
        return user
    }

    static async delete(id:string){
        const user = await UserModel.remove({_id:id})
        return user
    }

}
export default UserServices