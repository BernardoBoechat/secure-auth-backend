import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router()

router.get("/", authMiddleware, (req, res) => {
    res.json({
        message: "Área protegida",
        user: req.user
    });
})

