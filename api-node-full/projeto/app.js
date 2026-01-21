const http = require('http');
const hanldle = require('./handle');
const hello = require('console-log-hello-world');
const PORT = 3000;

const server = http.createServer(hanldle);

server.listen(PORT, () => {
  console.log(`A porta que está funcionando é ${PORT}`);
});