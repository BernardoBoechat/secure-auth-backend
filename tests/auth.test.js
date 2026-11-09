import { test, before, after } from "node:test";
import assert from "node:assert/strict";

process.env.JWT_SECRET = "segredo-de-teste";
process.env.JWT_EXPIRES = "1h";

const { default: app } = await import("../src/app.js");

let server;
let baseUrl;

before(async () => {
    server = app.listen(0);
    await new Promise((resolve) => server.once("listening", resolve));
    baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(() => server.close());

function login(email, password) {
    return fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });
}

test("login com credenciais válidas define cookie HTTP Only", async () => {
    const res = await login("bernardo@email.com", "123456");
    assert.equal(res.status, 200);

    const cookie = res.headers.get("set-cookie");
    assert.match(cookie, /token=/);
    assert.match(cookie, /HttpOnly/i);
});

test("senha errada retorna 401 com mensagem genérica", async () => {
    const res = await login("bernardo@email.com", "errada");
    assert.equal(res.status, 401);
    assert.equal((await res.json()).message, "E-mail ou senha inválidos");
});

test("e-mail inexistente retorna a mesma mensagem que senha errada", async () => {
    const res = await login("ninguem@email.com", "123456");
    assert.equal(res.status, 401);
    assert.equal((await res.json()).message, "E-mail ou senha inválidos");
});

test("dados faltando retornam 400", async () => {
    const res = await login("", "");
    assert.equal(res.status, 400);
});

test("/profile sem token retorna 401", async () => {
    const res = await fetch(`${baseUrl}/profile`);
    assert.equal(res.status, 401);
});

test("/profile com token retorna o usuário", async () => {
    const loginRes = await login("bernardo@email.com", "123456");
    const token = loginRes.headers.get("set-cookie").split(";")[0];

    const res = await fetch(`${baseUrl}/profile`, { headers: { Cookie: token } });
    assert.equal(res.status, 200);

    const body = await res.json();
    assert.equal(body.user.email, "bernardo@email.com");
});

test("/profile com token adulterado retorna 401", async () => {
    const res = await fetch(`${baseUrl}/profile`, { headers: { Cookie: "token=abc.def.ghi" } });
    assert.equal(res.status, 401);
});

test("logout limpa o cookie", async () => {
    const res = await fetch(`${baseUrl}/logout`, { method: "POST" });
    assert.equal(res.status, 200);
    assert.match(res.headers.get("set-cookie"), /token=;/);
});

test("rota inexistente retorna 404 em JSON", async () => {
    const res = await fetch(`${baseUrl}/nao-existe`);
    assert.equal(res.status, 404);
});
