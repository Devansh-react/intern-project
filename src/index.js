
import dotenv from "dotenv";
import app from "./app.js";
import mongoose from "mongoose";
import connectdatabase from "./db/db.js";
import { DB_NAME } from "./constants.js";

dotenv.config({
    path: './.env'
});
connectdatabase()

.then((()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on PORT :${process.env.PORT}`)
    })
    app.on("error", (error)=>{
        console.log(`Error occured : ${error}`)
        throw error;
    })
})

)
.catch((error)=>{
console.error(`MONGODB CONNECTION ERROR: ${error.message}`)
})