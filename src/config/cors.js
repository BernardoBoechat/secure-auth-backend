import cors from "cors"

export const corsOptions = {
    origin: process.env.ALLOWED_ORIGIN,
    credentials: true
}