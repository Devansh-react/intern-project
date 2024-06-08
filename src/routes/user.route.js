import { Router } from "express";
import { register } from "module";
import { registewruser } from "../controllers/user.controller.js";
const router = Router();

router.route("/register").post(registewruser)





export default router