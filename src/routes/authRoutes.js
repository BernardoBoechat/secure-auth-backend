import { users } from "../database/users.js"
import { Router } from "express"
import { validateLogin } from "../validations/authSchema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import { authService } from "../services/authService.js"
import { loginController } from "../controllers/authController.js"

dotenv.config()


const router = Router()


router.post("/", validateLogin, loginController)

export default router