// database connection 
import { promises } from "dns";
import mongoose from "mongoose";
import { Processor } from "postcss";

// typescript on retun value after connection 
type ConnectionObject = {
    //optional chaining
    isConnected?: number
}
// assigning the type to connecting which in this case is no . , it can be a string or boolean also 
const connection: ConnectionObject = {}


async function dbConnect(): Promise<void> {

    // nextjs is a edge time function means it stablish a connection when req is passed unlike in mern where once app started connection with databse is stablished and remaon stablised
    //sometimes two simultaneous connection req is sent in that case to avoid chocking we use this if condition

    if (connection.isConnected) {
        console.log("database already connected")
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "")
        connection.isConnected = db.connections[0].readyState
        console.log("databse connected successfully ❤️ ")

    } catch (error) {
        console.log("databse connection error"), error


    }
}
export default dbConnect
