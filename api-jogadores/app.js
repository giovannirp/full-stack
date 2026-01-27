const express = require('express');

const app = express();
const PORT = 3000;

// Middleware para entender o json
app.use(express.json());

const jogadores = [
  {
    id: 1,
    nome: "Dimba"
  },
  {
    id: 2,
    nome: "Rafinha"
  }
]

// Rota básica (teste)
app.get('/', (req, res) => {
  res.send("Api rodando 🚀🚀🚀");
});

// Rota jogadores
app.get('/jogadores', (req, res) => {
  res.send(jogadores)
});

// Exemplo de POST
app.post('/jogadores', (req, res) => {
  const nome = req.body;

  res.json({
    message: 'usuário criado com sucesso',
    nome
  });

});

// Subindo servidor
app.listen(PORT, () => {
  console.log(`O servidor está rodando em http://localhost:${PORT}`)
})

