import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose, { Schema } from "mongoose";
const userInfo= mongoose.Schema(
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
        require:true
    },
    userPassword:{
        type:String,
        require:true,
        
    },
    userLocation:{
        type:String,

    },
    userInfo:[userInfo],

    refreshToken:{
        type:String
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

userSchema.methods.gernaterefreshtoken = function () {
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
userSchema.methods.gernateaccesstoken = function () {
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