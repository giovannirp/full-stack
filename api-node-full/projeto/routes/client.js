let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
  res.send("Client Page")
});

router.get('/welcome', (req, res) => {
  res.send('Welcome to Client Page');
});

module.exports = router;