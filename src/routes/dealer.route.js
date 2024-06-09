import { Router } from "express";
import { reguisterDealer } from "../controllers/dealer.controller.js";
import { allDeals } from "../controllers/deal.controller.js";

const dealerrouter = Router();
//route to register a dealer
dealerrouter.route("/registerdealer").post(reguisterDealer)
//route for display of all deals 
dealerrouter.route("/allDeals").post(allDeals)






export default dealerrouter