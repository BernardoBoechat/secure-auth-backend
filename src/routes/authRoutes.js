import { Router } from "express";
import { validateLogin } from "../validations/authSchema.js";
import { loginController, logoutController } from "../controllers/authController.js";

const router = Router();

router.post("/login", validateLogin, loginController);
router.post("/logout", logoutController);

export default router;
