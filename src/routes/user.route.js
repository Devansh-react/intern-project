import { Router } from "express";
import { registewruser,addvehical } from "../controllers/user.controller.js";
import { listofCars } from "../controllers/car.controller.js";



const router = Router();

//route to registeruser
router.route("/register").post(registewruser)
//route to shgow list of car
router.route("/cars").post(listofCars)
//route to add vehical to database
router.route("/addvehical").post(addvehical)







export default router