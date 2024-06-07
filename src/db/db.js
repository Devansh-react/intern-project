import mongoose from "mongoose";
 import { DB_NAME } from "../constants.js";
 
 const connectdatabase= async()=>{
    try {
        const connectiondatabse= await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`)
        console.log(`\n Database connection Succeeded  DB_PORT : ${connectiondatabse.connection.host}`)
    } catch (error) {
        console.error(`\n database connection error : ${error}`)
        process.exit(1)
    }
 }
 export default connectdatabase;