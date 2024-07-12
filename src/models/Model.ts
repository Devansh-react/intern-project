//install mongoose
import { BlobOptions } from "buffer"
import mongoose, { Schema } from "mongoose"

// interface created just like struct in go lang
//as the data goes in themongoDb database we use extent Document --> learn this syntax 
export interface message extends Document {
    content: string,
    date: Date,
    CreatedAt: Date
}


const MessageSchema: Schema<message> = new Schema({
    content: {
        type: String,
        required: true
    }
    ,
    date: {
        type: Date,
        required: true,
        date: Date.now()
    },

    CreatedAt: {
        type: Date,
        required: true,
        date: Date.now()
    }

})


// for user

export interface User extends Document {
    Username: string,
    Email: string,
    password: string,
    forgotpasswordtoken: string,
    forgotpasswordtokenExpiry: Date,
    verificationcode: string,
    verifycodeExpiry: Date
    isVerified: boolean,
    isAcceptiongmessage: boolean,
    message: message[]
}
const UserSchema: Schema<User> = new Schema({

    Username: {
        type: String,
        required: [true, "Please enter your username"],
        unique: true
    },
    Email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
        // using regexr for basic email validation

    },
    password: {
        type: String,
        required: [true, "please provid password"]
    },
    forgotpasswordtoken: {
        type: String,
        required: true
    },
    forgotpasswordtokenExpiry: {
        type: Date,
        required: true
    },
    verificationcode: {
        type: String,
        required: true
    },
    verifycodeExpiry: {
        type: Date,
        required: true
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    },
    isAcceptiongmessage: {
        type: Boolean,
        required: true,
        default: false
    },
    message: [MessageSchema]
})
// next js runs on edge so we create a or syntax wether a user is created or not in the databse 

const usermodel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>('User', UserSchema))

// export statment 
export default usermodel




// working of token
//1- a token is generated via api and send to user/browser/email and to DB
//2- and with any sort of cange or hitting the end point that VC is send to api api on that VC search for user take out the user to API . now it has access to that paticular users feild can can alter it
//-3 codeexpiary refers to the timefor which this is allowed 