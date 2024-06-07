import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";
const userInfo=new mongoose.Schema(
    {
        userName:{
            type:String,
            require:true
        },
        userAge:{
            type:Number,
            require:true
        },
        userPhoneNo:{
            type:Number,
            require:true,
            maxLength:[10,"password must be less than 10"],
            minLength:[10,"password must not be less than 10"] 
        },
        userAddress:{
            type:String,
            require:true
        },

    }
)
const userSchema = mongoose.Schema({
    userEmail:{
        type:String,
        require:true,
        unique:true
    },
    userPassword:{
        type:String,
        require:true,
        
    },
    userLocation:{
        type:string,
        require:true
    },
    userInfo:[userInfo],



},{timestamps:true});

export const user = mongoose.model("user", userSchema)