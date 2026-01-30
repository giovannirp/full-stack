const express = require('express');
const swaggerUi = require('swagger-ui-express');

const jogadoresRoutes = require('./routes/jogadores.routes');
const swaggerSpec = require('./swagger');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/jogadores', jogadoresRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('API rodando 🚀🚀🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});