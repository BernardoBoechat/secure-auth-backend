import app from "./app.js";
import dotenv from "dotenv";

const port = 3000

dotenv.config()

app.listen(port, () => {
    console.log(`
🚀 Servidor iniciado com sucesso!

📡 Porta: ${port}
🌐 URL: http://localhost:${port}
⚙️ Ambiente: ${process.env.NODE_ENV || "development"}
    `)
})