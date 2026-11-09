const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLogin(req, res, next) {
    const { email, password } = req.body ?? {};

    if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
        return res.status(400).json({
            message: "E-mail e senha são obrigatórios"
        });
    }

    if (!EMAIL_REGEX.test(email.trim())) {
        return res.status(400).json({
            message: "E-mail inválido"
        });
    }

    next();
}
