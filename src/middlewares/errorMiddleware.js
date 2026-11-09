import { AppError } from "../utils/AppError.js";

export function notFoundMiddleware(req, res) {
    res.status(404).json({
        message: "Rota não encontrada"
    });
}

// Express 5 encaminha para cá os erros lançados em handlers async
// eslint-disable-next-line no-unused-vars
export function errorMiddleware(err, req, res, next) {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        });
    }

    console.error(err);

    return res.status(500).json({
        message: "Erro interno do servidor"
    });
}
