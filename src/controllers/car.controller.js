import { asynchandeler } from "../utils/asynchandler.js";
import {car} from "../models/car.model.js"
import { ApiResponse } from "../utils/apiresponse.js";

const listofCars= asynchandeler( async (req,res)=>{
    res.status(200).json(
        new ApiResponse(200,"success",car)
    )
})
export {listofCars}