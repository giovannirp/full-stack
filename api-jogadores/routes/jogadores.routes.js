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

// Delete 
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);

  const jogador = jogadores.find(j => j.id === id);

  if (!jogador) {
    return res.status(404).json({ message: 'Jogador não encontrado '});
  }

  jogadores.splice(jogadores.indexOf(jogador), 1);

  res.json({
    message: 'Jogador removido com sucesso',
    jogador
  })

  
});

module.exports = router;