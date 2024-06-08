import { Router } from "express";
import { register } from "module";
import { reguisterDealer} from "../controllers/user.controller.js";
const router = Router();

router.route("/registerdealer").post(reguisterDealer)





export default router