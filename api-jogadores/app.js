const express = require('express');
const jogadoresRoutes = require('./routes/jogadores.routes');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = 3000;

// Middleware para entender JSON
app.use(express.json());

// 🔹 Configuração do Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Jogadores',
      version: '1.0.0',
      description: 'API simples para cadastro de jogadores'
    }
  },
  apis: [
    './routes/*.js',
    './docs/*.js' // 👈 arquivos de documentação separados
  ]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// 🔹 Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 🔹 Rotas
app.use('/jogadores', jogadoresRoutes);

// Rota básica (teste)
app.get('/', (req, res) => {
  res.send('API rodando 🚀🚀🚀');
});

// Subindo servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Swagger em http://localhost:${PORT}/api-docs`);
});