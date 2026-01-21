let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
  res.send("Hello Wolrd")
});

router.get('/welcome', (req, res) => {
  res.send('Welcome to Express');
});

module.exports = router;