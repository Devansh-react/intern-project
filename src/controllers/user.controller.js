import { asynchandeler } from "../utils/asynchandler.js";
import { user } from "../models/user.model.js";
import {car} from "../models/car.model.js";
import { ApiError } from "../utils/apierror.js";
import { ApiResponse } from "../utils/apiresponse.js";





const registewruser= asynchandeler( async (req,res)=>{
  
  const { Email, Password } = req.body
  console.log("email:",Email)
  console.log("\n password:",Password)

//check for empty feild
  if(
    [userEmail,userPassword,userLocation,userInfo].some((feild)=>feild?.trim()==="")
  ){ throw new Apierror(200,"all feild are required")}

//checkl for exixsting user
  const exiteduser = user.findone({
    $or:[ {userEmail}, {userPassword} , {userInfo}]
  })
  if(exiteduser) throw new Apierror(200,"user already exist")
//add user to database
   const Usercreated = await user.create({
      userEmail,
      userPassword,
      userLocation,
      userInfo
    })


//check for the user added ir not and remove password and resfresh token from json resonse
    const createdUser = user.findbyid(Usercreated._id).select( "-password ", " refreshToken ")
    if(!createdUser){
      throw new Apierror(200,"user not created")
    }

    return res.status(201).json(
       new apiresponse(201,"user created",createdUser)
    )

 

  })
export {registewruser};



const addvehical = asynchandeler( async (req,res)=>{
  const { OwnerName  ,carSegment , CarModel , CarName , CarInfo} =req.body
  console.log( "OwnerName:", OwnerName)
  console.log("\n carSegment:", carSegment)
  console.log("\n CarModel:", CarModel)

// adding vehical to database
  const newvehical = await car.create({
    OwnerName,
    carSegment,
    CarModel,
    CarName,
    CarInfo
  })

  // chceck for the vehical is added or not 
  const vehical = car.findbyid(newvehical._id)
  if(!vehical){
    throw new Apierror(200,"vehical not added")
  }
  return res.status(201).json(
     new apiresponse(201,"vehical added",vehical)
  )
})
export {addvehical};