import express from "express";

const app = express();
app.use(express.json());

const users = [ ];

// Rota para criar um novo usuário - POST
app.post("/usuarios", (req, res) => {
  users.push(req.body);
  res.status(201).json(req.body);
});

// Rota para listar todos os usuários - GET
app.get("/usuarios", (req, res) => {
  res.status(200).json(users);
});

app.listen(3000);
