import { verifyToken } from "../utils/jwt.js";

export function authMiddleware(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Token não encontrado"
        });
    }

    try {
        req.user = verifyToken(token);
        next();
    } catch {
        return res.status(401).json({
            message: "Token inválido ou expirado"
        });
    }
}
