import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}
))
app.use(express(JSON))

//routes import :

import router from "./routes/user.route.js";
import dealerrouter from "./routes/dealer.route.js";



//routes decleration
 app.use("/api/v1/users", router);
 app.use("/api/v1/dealer", dealerrouter);


export default app;