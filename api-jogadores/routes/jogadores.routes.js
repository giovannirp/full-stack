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
  const nome = req.body;

  res.json({
    message: 'usuário criado com sucesso',
    nome
  });

});

module.exports = router;