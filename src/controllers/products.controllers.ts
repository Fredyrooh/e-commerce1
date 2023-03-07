import { Request, Response } from "express"
import ProductServices from "../services/product.services"
import { handleHttp } from "../utils/error.handle"


class ProductControllers {
    static async getOne (req: Request, res: Response){
        try{
            const product = await ProductServices.getOne(req.params.id)
            const data = product ? product : 'PRODUCT_NOT_FOUND'
            res.send(data)
        }catch(error){
            handleHttp(res, 'ERROR_GET_PRODUCT')
        }
    }
    
    static async getAll (req: Request,res: Response){
        try{
            const products = await ProductServices.getAll()
            const data = products ? products : 'NO_PRODUCTS'
            res.send(products)
        }catch(error){
            handleHttp(res, 'ERROR_GET_PRODUCTS')
        }
    }
    
    static async update({params,body}: Request, res: Response){
        try{
            const product = await ProductServices.update(params.id,body)
            res.send(product)
        }catch(error){
            handleHttp(res, 'ERROR_UPDATE_PRODUCT')
        }
    }
    
    static async post({body}: Request, res: Response): Promise<void>{
        try{
            const product = await ProductServices.post(body)
            res.send(product)
        }catch(error){
            handleHttp(res, 'ERROR_POST_PRODUCT', error)
        }
    }
    
    static async delete(req: Request, res: Response){
        try{
            const product = await ProductServices.delete(req.params.id)
            res.send(product)
        }catch(error){
            handleHttp(res, 'ERROR_DELETE_PRODUCT')
        }
    }
}

export default ProductControllers