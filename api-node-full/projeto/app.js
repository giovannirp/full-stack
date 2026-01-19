const http = require('http');

function hanldle(request, response) {

  let html = `
    <h1>Olá, bem vindo ao módulo http do nodejs</h1>
  `;

  response.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
  response.write(html);
  response.end();
}

const server = http.createServer(hanldle);

server.listen(3000, () => {
  console.log("olá mundo");
});