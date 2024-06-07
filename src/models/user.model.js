import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
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
    refreshToken:{
        type:strings
    }



},{timestamps:true});

userSchema.pre("save", async function (next){

    if( !this.isModified("userPassword")) return next();

    this.userPassword = await bcrypt.hash(this.userPassword,10)
    next()
})
userSchema.methods.comparePassword= async function (password){
    return await bcrypt.compare(this.userPassword, userPassword)
    
}

userschema.methods.gernaterefreshtoken = function () {
    return Jwt.sign(
        {
           _id: this._id,

        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expireIN:process.env.REFRESH_TOKEN_EXPIRY

        }


    )
}
userschema.methods.gernateaccesstoken = function () {
    return Jwt.sign(
        {
            _id: this._id,
            userName: this.userName,
            userEmail: this.userEmail

        },
        process.env._ACCESS_TOKEN_SECRET,
        {
            expireIN: process.env.ACCESS_TOKEN_EXPIRY

        }


    )
}


export const user = mongoose.model("user", userSchema)