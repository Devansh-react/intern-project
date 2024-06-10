import { Router } from "express";
import { reguisterDealer } from "../controllers/dealer.controller.js";
import { allDeals } from "../controllers/deal.controller.js";
import soldcar from "../controllers/soldvehical.controller.js";


const dealerrouter = Router();
//route to register a dealer
dealerrouter.route("/registerdealer").post(reguisterDealer)
//route for display of all deals 
dealerrouter.route("/allDeals").post(allDeals)
//routes for sold vehical& user details 
dealerrouter.route("/soldvehival").post(soldcar)






export default dealerrouter