import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { corsOptions } from "./config/cors.js";
import authRoute from "./routes/authRoutes.js";
import homeRoute from "./routes/homeRoutes.js"

const app = express();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.use("/login", authRoute);
app.use("/", homeRoute)

export default app;