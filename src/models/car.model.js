import mongoose, { Schema } from "mongoose";
import { type } from "os";
const carInfo = new mongoose.Schema({
   
    colour:{
        type:string,
    },
    kmCovered:{
        type:number,
        required:true,
    },
    fuelType:{
        type:string,
        required:true,
        enum:["petrol","diesel"],

    }
})

 const carSchema = new mongoose.Schema({
    OwnerName:{
        type:Schema.Types.ObjectId,
        ref:"user",
    },
    carSegment:{
        type:String,
        required:true,
        enum:["Hatchback","Sedan","SUV","jeep"],

    },
    CarModel:{
        type:String,
        required:true,
    },
    CarName:{
        type:String,
        required:true,
    },
    carInfo:[carInfo],
 },{timestamps:true})
 export const car= mongoose.model("car",carSchema)
