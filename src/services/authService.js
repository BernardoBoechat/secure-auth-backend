import { users } from "../database/users.js";
import { jwtToken } from "../utils/jwt.js";
import { bcryptCompare } from "../utils/hash.js";
import { AppError } from "../utils/AppError.js";

// Mesma mensagem para e-mail e senha errados, para não revelar quais e-mails existem
const INVALID_CREDENTIALS = "E-mail ou senha inválidos";

export async function authService(email, password) {
    const normalizedEmail = email.toLowerCase().trim();
    const user = users.find((u) => u.email.toLowerCase() === normalizedEmail);

    if (!user) {
        throw new AppError(INVALID_CREDENTIALS, 401);
    }

    const passwordMatch = await bcryptCompare(password, user.password);

    if (!passwordMatch) {
        throw new AppError(INVALID_CREDENTIALS, 401);
    }

    const token = jwtToken(user);

    return {
        token,
        user: {
            id: user.id,
            email: user.email,
            role: user.role
        }
    };
}
