import { Router } from "express"
const router = Router()


router.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Secure Auth Backend</title>
            <style>
                body {
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #0f172a;
                    font-family: Arial, sans-serif;
                }

                .modal {
                    background: #1e293b;
                    color: white;
                    width: 400px;
                    padding: 30px;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
                    text-align: center;
                }

                h1 {
                    color: #38bdf8;
                }

                .status {
                    background: #22c55e;
                    padding: 8px;
                    border-radius: 8px;
                    margin: 20px 0;
                }

                ul {
                    text-align: left;
                }
            </style>
        </head>

        <body>

            <div class="modal">
                <h1>Secure Auth Backend</h1>

                <div class="status">
                    API Online
                </div>

                <p>
                    Backend de autenticação desenvolvido com Node.js.
                </p>

                <ul>
                    <li>JWT Authentication</li>
                    <li>HTTP Only Cookies</li>
                    <li>CORS Configurado</li>
                    <li>Middleware de proteção</li>
                </ul>

                <small>
                    Desenvolvido por Bernardo Boechat
                </small>
            </div>

        </body>
        </html>
    `)
})

export default router