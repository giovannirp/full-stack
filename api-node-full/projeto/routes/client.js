let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
  res.send("Client Page")
});

router.get('/welcome', (req, res) => {
  res.send('Welcome to Client Page');
});

router.get('/new', (req, res) => {
  res.render('Client_new')
})

module.exports = router;