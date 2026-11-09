// Carrega o .env antes de qualquer outro módulo ler process.env
import "dotenv/config";
import app from "./app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`
🚀 Servidor iniciado com sucesso!

📡 Porta: ${port}
🌐 URL: http://localhost:${port}
⚙️ Ambiente: ${process.env.NODE_ENV || "development"}
    `);
});
