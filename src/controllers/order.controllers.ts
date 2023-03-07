import { Request, Response } from "express"
import OrderServices from "../services/order.services"
import { handleHttp } from "../utils/error.handle"

class OrderControllers {

    static async getOne (req: Request, res: Response){
        try{
            res.send({
                data: 'esto solo ve los que tiene sesion con jwt'
            })
        }catch(error){
            handleHttp(res, 'ERROR_GET_PRODUCT')
        }
    }

}

export default OrderControllers