const http = require('http');
const hanldle = require('./handle')

const server = http.createServer(hanldle);

server.listen(3000, () => {
  console.log("olá mundo");
});