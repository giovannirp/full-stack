const express = require('express');
const jogadoresRoutes = require('./routes/jogadores.routes')

const app = express();
const PORT = 3000;

// Middleware para entender o json
app.use(express.json());

// usando as rotas jogadores
app.use('/jogadores', jogadoresRoutes);

// Rota básica (teste)
app.get('/', (req, res) => {
  res.send("Api rodando 🚀🚀🚀");
});

// Subindo servidor
app.listen(PORT, () => {
  console.log(`O servidor está rodando em http://localhost:${PORT}`)
})

