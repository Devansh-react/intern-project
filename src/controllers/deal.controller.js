import { asynchandeler } from "../utils/asynchandler.js";
import { deal} from "../models/deal.model.js";



const allDeals = asynchandeler(async (req, res) => {
    message: "all deals"
  });

  


export { allDeals };