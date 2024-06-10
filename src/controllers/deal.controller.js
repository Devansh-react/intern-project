import { asynchandeler } from "../utils/asynchandler.js";
import { deal} from "../models/deal.model.js";
import { ApiResponse } from "../utils/apiresponse.js";



const allDeals = asynchandeler(async (req, res) => {
    return res.status(200).json(
      new ApiResponse(200, "success", deal)

    );
  });

  


export { allDeals };