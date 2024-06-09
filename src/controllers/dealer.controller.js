import { ApiError } from "../utils/apierror.js";
import { asynchandeler } from "../utils/asynchandler.js";
import { dealership } from "../models/dealership.model.js";
import { ApiResponse } from "../utils/apiresponse.js";


const reguisterDealer = asynchandeler(async (req, res) => {

  const { dealerEmail, dealerName, password, dealerLocation, dealerShipInfo } = req.body
  console.log("email:", dealerEmail);
  console.log("\n password:", password);
  console.log("\n dealerName:", dealerName);

  if ([dealerEmail, dealerName, password, dealerLocation, dealerShipInfo].some((feilds) => feilds?.trim() === "")) {
    throw new ApiError(400, "please fill all fields",)
  }

  const existeddealer= await dealership.findOne({
    $or:[ {dealerEmail},{dealerName}]
  })

  if(existeddealer){
    throw new ApiError(400,"dealer already existed")
  }


  const Dealercreated = await dealership.create({
    dealerEmail,
    dealerName,
    password,
    dealerLocation,
    dealerShipInfo
  })

  const createdDealer= dealership.findById(Dealercreated._id).select( " -password ", " refreshToken ")

  if(!createdDealer){
    throw new ApiError(400, "dealer not found")
  }

  return res.status(201).json(
   new  ApiResponse(201, "dealer created successfully", createdDealer)
  )


})
export { reguisterDealer };