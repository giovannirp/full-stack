let express = require('express');
let router = express.Router();

router.use((req, res, next) => {
  req.attr = 'Atributo de request';
  console.log('Middleware executado com sucesso')
  next();
})

router.get('/', (req, res) => {
  res.render('home', {
    message: "Hello World do parametro"
  });
  // res.send("Hello Wolrd")
});

router.get('/welcome', (req, res) => {
  res.send('Welcome to Express' + req.attr);
});

router.get('/requests/:name', (req, res) => {
  res.send(req.params.name)
});

router.post('/body', (req, res) => {
  res.json(req.body);
});

router.get('/response', (req, res) => {
  res.status(200).json({
    name: "Felipe",
    lastname: "Oliveira"
  })

})

module.exports = router;