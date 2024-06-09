import mongoose, { Schema } from "mongoose"
const dealInfo = new mongoose.Schema({
    dealPrice:{
        type:Number,
        required:true
    },
    dealDate:{
        type:Date,
        required:true
    }
})


const deals= new mongoose.Schema({
    carID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"car"
    },
    dealInfo:[dealInfo]

 },{timestamps:true})
 
 export const deal= mongoose.model("deal",deals)