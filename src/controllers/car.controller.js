import { asynchandeler } from "../utils/asynchandler.js";
import {car} from "../models/car.model.js"




const listofCars= asynchandeler( async (req,res)=>{
    res.status(200)
.json({
    message:"success"
    })
})
export {listofCars}