import bcrypt from "bcrypt"

export async function bcryptCompare(password, hashedPassword) {
    const passwordMatch = await bcrypt.compare(
        password,
        hashedPassword
    )

    return passwordMatch
}