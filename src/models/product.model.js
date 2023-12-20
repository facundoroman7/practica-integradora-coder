import {  Schema , model} from "mongoose"

const productSchema = new Schema({
    title: {type: String, requiered: true},
    description: {type: String, requiered: true},
    price: {type: Number, requiered: true},
    thumbnail: {type: String, requiered: true},
    code: {type: String, requiered: true, unique: true},
    stock: {type: Number, requiered: true},
})

const productModel = model("products", productSchema);

export {productModel};