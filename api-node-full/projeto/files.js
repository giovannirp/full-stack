const fs = require('fs');

// Criando arquivo myfile.txt
fs.writeFile('myfile.txt', 'Hello word from felipe Daniel', (err) => {
  if(err) {
    throw err;
  }
})