const express = require('express');
const home = require('./routes/home')
const client = require('./routes/client')
const app = express();
const PORT = 3000;

app.use('/', home);
app.use('/client', client)

app.listen(PORT, () => {
  console.log(`App rodando http://localhost:${PORT}`);
});


// const http = require('http');
// const hanldle = require('./handle');
// const hello = require('console-log-hello-world');
// const PORT = 3000;

// const server = http.createServer(hanldle);

// server.listen(PORT, () => {
//   console.log(`A porta que está funcionando é ${PORT}`);
// });