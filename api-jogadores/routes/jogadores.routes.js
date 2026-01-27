const express = require("express");
const router = express.Router();

const jogadores = [
  { id: 1, nome: 'Dimba' },
  { id: 2, nome: 'Rafinha' }
];

// Rota jogadores
router.get('/', (req, res) => {
  res.send(jogadores)
});

// Exemplo de POST
router.post('/', (req, res) => {
  const { nome } = req.body;

  const novoJogador = {
    id: jogadores.length + 1,
    nome
  }

  jogadores.push(novoJogador);

  res.status(201).json({
    message: 'Jogador cadastrado com sucesso',
    jogador: novoJogador
  })
});

module.exports = router;