const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Jogadores',
      version: '1.0.0',
      description: 'API simples em Node + Express'
    }
  },
  apis: ['./routes/*.js'] // 👈 ESTE É O PONTO-CHAVE
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;