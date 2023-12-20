import express from "express";
import { engine } from 'express-handlebars';
import __dirname from './utils.js';
import * as path from "path";
import mongoose from "mongoose";
import routerViews from "./routes/views.routes.js";
import { password } from "./env.js";
import routerProduct from "./routes/product.routes.js";
 
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = 8080

//Conexion Mongoose 

mongoose.connect(
    `mongodb+srv://facundoagustinroman10:${password}@cluster0.9fdpff2.mongodb.net/?retryWrites=true&w=majority`

)
.then(() => {
    console.log("DB conectado");
})
.catch((err) => {
    console.log("Hubo un error al conectar la base de datos:");
    console.error(err);
});

//estructura de hanclebars

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname + "/views"))

//static para la carpeta public
app.use("/" , express.static(__dirname + "/public"))

app.get("/", (req, res) =>{
    res.render("index")
})

app.use("/", routerViews);

app.use("/api/product", routerProduct);


app.listen(port, () =>{
    console.log(`servidor abierto ${port}`);
})
