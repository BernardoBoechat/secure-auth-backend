import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { corsOptions } from "./config/cors.js";
import authRoute from "./routes/authRoutes.js";
import homeRoute from "./routes/homeRoutes.js";
import profileRoute from "./routes/profileRoutes.js";
import { notFoundMiddleware, errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.use("/", authRoute);
app.use("/profile", profileRoute);
app.use("/", homeRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
