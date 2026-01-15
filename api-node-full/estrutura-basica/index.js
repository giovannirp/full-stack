// const person = new Pessoa();

const pessoa = {
  nome: 'Joao',
  sobreNome: 'Alberto',
  idade: 33
}

const pessoa2 = {
  ...pessoa,
  nome: 'João',
  sobreNome: 'Alberto',
  idade: 33,
  telefone: '999999999'
}


function test() {
  console.log('Essa função padrao');
}

const novaFunc = () => {
  console.log("Nova func")
}

novaFunc()

const mostraIdade = (idade) => {
  console.log(idade)
}

module.exports = {
  pessoa: pessoa,
  mostraIdade
}

