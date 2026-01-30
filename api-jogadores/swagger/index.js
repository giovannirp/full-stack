const swaggerJsdoc = require('swagger-jsdoc');

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
    './docs/*.js'
  ]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;
