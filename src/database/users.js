import bcrypt from "bcrypt";

export const users = [
  {
    id: 1,
    name: "Bernardo",
    email: "bernardo@email.com",
    password: await bcrypt.hash("123456", 10),
    role: "user"
  },
  {
    id: 2,
    name: "Admin",
    email: "admin@email.com",
    password: await bcrypt.hash("admin123", 10),
    role: "admin"
  },
  {
    id: 3,
    name: "João Silva",
    email: "joao@email.com",
    password: await bcrypt.hash("joao123", 10),
    role: "user"
  }
];