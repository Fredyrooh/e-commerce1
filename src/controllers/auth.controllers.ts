import { Request, Response } from "express"
import AuthServices from "../services/auth.services"
import { handleHttp } from "../utils/error.handle"
import { genereteAndValidate } from "../utils/jwt.handle"

class AuthControllers{

   static async register (req: Request, res: Response){
      try {
         const user = await AuthServices.register(req.body)
         if(typeof user !== "string"){
           
            console.log('ESTE ES EL REQ, TENEMOS QUE BUSCAR EL REQ.USER',req);
             const token = await genereteAndValidate(user)
             res.cookie('token',token)
         }
      
         res.send(user)
      } catch (error) {
         console.log(error);
         
         handleHttp(res, 'ERROR_REGISTER_AUTH')
      }
   }
   static async login (req: Request, res: Response){
      try {
         const checkPass = await AuthServices.login(req.body)
         
         if(!checkPass) return res.status(403).send('PASSWORD_INCORRECT')
         
         res.send(checkPass)  
      } catch (error) {
         handleHttp(res, 'ERROR_LOGIN_AUTH')
      }
   } 
}


export default AuthControllers