const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const home = require('./routes/home')
const client = require('./routes/client')
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/assets', express.static('./assets'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', home);
app.use('/client', client);

app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).json({
    message: "Alguma coisa está errada!"
  })
})

app.listen(PORT, () => {
  console.log(`App rodando http://localhost:${PORT}`);
});
