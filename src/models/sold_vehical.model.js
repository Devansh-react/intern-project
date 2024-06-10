import mongoose, { Schema } from "mongoose";
const vehicalInfo = new mongoose.Schema({

    kmCovered:{
        type:Number,
        required:true,
    },
    fuelType:{
        type:String,
        required:true,
        enum:["petrol","diesel"],

    }
})
 const sold_vehical = new mongoose.Schema({
    carID:{
        type:Schema.Types.ObjectId,
        ref:"car"
    },
    vehicalInfo:[vehicalInfo]

 }, { timestamps: true });

 export const soldvehical = mongoose.model("soldvehical", sold_vehical);