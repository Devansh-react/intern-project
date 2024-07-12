import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";


const dealershipInfo = new mongoose.Schema({
    dealerAddress: {
        type: String,
        require: true
    },
    dealerContactNo: {
        type: Number,
        require: true,
        maxLength: [10, "password must be less than 10"],
        minLength: [10, "password must not be less than 10"]
    },


})
const dealershipSchema = new mongoose.Schema({
    dealerEmail: {
        type: String,
        required: true,
        unique: true
    },
    dealerName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    dealerLocation: {
        type: String,
        required: true
    },
    deal: {
        type: Schema.Types.ObjectId,
        ref: "deal",
    },
    SoldVehical: {
        type: Schema.Types.ObjectId,
        ref: "soldvehical",
    },
    cars: {
        type: Schema.Types.ObjectId,
        ref: "cars"
    },
    dealerShipInfo: [dealershipInfo],
    refreshTokens: {
        type: String
    }


}, { timestamps: true });

dealershipSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next()
})
dealershipSchema.methods.comparePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password)
}
const delearship = mongoose.model("dealership", dealershipSchema)
export default delearship;