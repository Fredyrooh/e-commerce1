import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interfaces";

const ProductSchema = new Schema<Car>(
    {
        brand:{
            type:String,
            required:true
        },
        model: {
            type:String,
            required:true
        },
        color:{
            type: String,
            required:true
        },
        gas:{
            type: String,
            enum: ['gasoline','electric'],
            required:true
        },
        year:{
            type:Number,
            required:true
        },
        description:{
            type:String
        },
        price:{
            type: Number,
            required:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const ProductModel = model('products', ProductSchema)
export default ProductModel