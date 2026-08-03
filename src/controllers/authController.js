import { authService } from "../services/authService.js"

export async function loginController(req, res) {
    const { email, password } = req.body

    const result = await authService(email, password)

    res.cookie("token", result.token, {
        httpOnly: true,
        secure: false, 
        sameSite: "lax",
        maxAge: 60 * 60 * 1000
    })

    return res.json({
        message: "Login realizado"
    })
}