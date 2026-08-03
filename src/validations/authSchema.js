
export function validateLogin(req, res, next) {

    const { email, password } = req.body;


    if (!email || !password) {
        return res.status(400).json({
            message: "Email e senha são obrigatórios"
        });
    }


    if (!email.includes("@")) {
        return res.status(400).json({
            message: "Email inválido"
        });
    }



    next();

}