const fs = require('fs');

// Criando arquivo myfile.txt
// fs.writeFile('myfile.txt', 'Hello word from Giovanni Ribeiro', (err) => {
//   if(err) {
//     throw err;
//   }
// })

// Ler arquivo
// fs.readFile('myfile.txt', (err, data) => {
//   if (err) {
//     throw err;
//   }

//   console.log(data.toString('utf8'));
// })

// Ler diretório
// fs.readdir('.', (err, files) => {
//   if(err) {
//     throw err;
//   }
//   for (var file in files) {
//     console.log(files[file])
//   }
// });

// Ler somente arquivo js
fs.readdirSync('.')
 .filter((file) => {
    return (file.endsWith('.js'))
 })
 .forEach((file) => {
    console.log(file);
 })