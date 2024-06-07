import mongoose, { Schema } from "mongoose";
import { cars } from "./cars.model.js";
import { deal } from "./deal.model.js";
import { soldvehical } from "./sold_vehical.model.js";

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
        type: string,
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
        type: string
    }


}, { timestamps: true });

dealershipSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, salt);
    next()
})
dealershipSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}
export const dealership = mongoose.model("dealership", dealershipSchema)