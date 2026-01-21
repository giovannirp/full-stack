function handle(request, response) {
  const html = `
    <h1>Olá, bem-vindo ao módulo HTTP do Node.js</h1>
  `;

  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(html);
}

module.exports = handle;