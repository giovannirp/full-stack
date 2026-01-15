const { mostraIdade, pessoa } = require('./index');


// mostraIdade(10)
const pessoa3 = {
  nome: 'Joao',
  idade: 39
}

function testNome({ nome, idade }) {
  console.log('Nome: ', nome);
  console.log('Idade: ', idade)
}

testNome(pessoa3)