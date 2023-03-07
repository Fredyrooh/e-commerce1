import { Car } from "../interfaces/car.interfaces"
import ProductModel from "../models/Product"


class ProductServices {

    static async getOne (id:string){
        const product = await ProductModel.findOne({_id:id})
        return product
    }
    
    static async getAll (){
        const products = await ProductModel.find().sort({name:1})
        return products
    }
    
    static async update(id:string, data:Car){
        const product = await ProductModel.findOneAndUpdate({ _id:id }, data, { new:true })
        return product
    }
    
    static async post(car: Car){
        const product = await ProductModel.create(car)
        return product   
    }

    static async delete(id:string){
        const product = await ProductModel.remove({_id:id})
        return product
    }
    
}
export default ProductServices