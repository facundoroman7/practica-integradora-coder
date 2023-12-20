import { Router } from "express";
// import { productModel } from "../models/product.model";
import productDao from "../daos/dbManeger/product.dao.js";

const router = Router();

router.get("/", async (req, res) =>{
    try {
        const prod = await productDao.getAllProducts()
        console.log(prod);
        res.json(prod)
    } catch (error) {
        console.log(error);
}})

router.post("/", async (req, res) =>{
    try {
        const prod = req.body
        const producto = await productDao.createProduct(prod)
        console.log(producto);
        res.json(producto)
    } catch (error) {
        console.log(error);
}})


export default router;