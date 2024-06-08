import { asynchandeler } from "../utils/asynchandler.js";


const registewruser= asynchandeler( async (req,res)=>{
  res.status(200).json({
    message: "user registerd successfully"

  })

})
export {registewruser};


const reguisterDealer= asynchandeler( async (req,res)=>{
  res.status(200).json({
    message: "dealer registerd successfully"

  })

})
export {reguisterDealer};