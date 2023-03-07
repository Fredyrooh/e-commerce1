import { Request, Response } from "express"
import UserServices from "../services/users.services"
import { handleHttp } from "../utils/error.handle"

class UserControllers{

    static async getOne (req: Request, res: Response){
        try{
            const user = await UserServices.getOne(req.params.id)
            const data = user ? user : 'PRODUCT_NOT_FOUND'
            res.send(user)
        }catch(error){
            handleHttp(res, 'ERROR_GET_USER')
        }
    }
    
    static async getAll (req: Request,res: Response){
        try{
            const users = await UserServices.getAll()
            const data = users ? users : 'NO_USERS'
            res.send(users)
        }catch(error){
            handleHttp(res, 'ERROR_GET_USERS')
        }
    }
    
    static async update({params,body}: Request, res: Response){
        try{
            const user = await UserServices.update(params.id,body)
            res.send(user)
        }catch(error){
            handleHttp(res, 'ERROR_UPDATE_USER')
        }
    }
    
    static async delete(req: Request, res: Response){
        try{
            const user = await UserServices.delete(req.params.id)
            res.send(user)
        }catch(error){
            handleHttp(res, 'ERROR_DELETE_USER')
        }
    }

}
export default UserControllers