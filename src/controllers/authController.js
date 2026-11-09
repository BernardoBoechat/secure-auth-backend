import { authService } from "../services/authService.js";

const isProduction = process.env.NODE_ENV === "production";

const cookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax"
};

export async function loginController(req, res) {
    const { email, password } = req.body;

    const result = await authService(email, password);

    res.cookie("token", result.token, {
        ...cookieOptions,
        maxAge: 60 * 60 * 1000
    });

    return res.json({
        message: "Login realizado",
        user: result.user
    });
}

export function logoutController(req, res) {
    res.clearCookie("token", cookieOptions);

    return res.json({
        message: "Logout realizado"
    });
}
