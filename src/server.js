import app from "./app.js";

const port = 3000

app.listen(port, () => {
    console.log(`
🚀 Servidor iniciado com sucesso!

📡 Porta: ${port}
🌐 URL: http://localhost:${port}
⚙️ Ambiente: ${process.env.NODE_ENV || "development"}
    `)
})