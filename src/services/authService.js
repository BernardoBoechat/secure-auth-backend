import { users } from "../database/users.js";
import { jwtToken } from "../utils/jwt.js";
import { bcryptCompare } from "../utils/hash.js";


export async function authService(email, password) {
    const user = users.find((u) => u.email.toLocaleLowerCase() === email.toLocaleLowerCase().trim())

    if (!user) {
        throw new Error("Usuário não encontrado")
    }

    const passwordMatch = await bcryptCompare(password, user.password)

    if (!passwordMatch) {
       throw new Error("Senha inválida")
    }

    const token = jwtToken(user)

    return {
        token,
        user: {
            id: user.id,
            email: user.email,
            role: user.role
        }
    }
}