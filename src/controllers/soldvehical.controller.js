import { ApiResponse } from "../utils/apiresponse.js";
import { asynchandeler } from "../utils/asynchandler.js";
import { dealership } from "../models/dealership.model.js";
import { soldvehical } from "../models/sold_vehical.model.js";

const soldcar = asynchandeler(async (req, res) => {
    return res.status(200).json(
        new ApiResponse(200, "list of sold vehical",soldcar)
    )
})
export default soldcar;