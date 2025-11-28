const express = require("express");
const app = express();
const PORT = 3000; // executar na porta 3000

// Indicar para express ler body com json
app.use(express.json());

// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "70" },
];

const times = [
  { id: 1, nome: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, nome: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, nome: "Santos", estado: "SP", titulos: 8 },
  { id: 4, nome: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, nome: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, nome: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, nome: "Cruzeiro", estado: "MG", titulos: 4 },
];

// Criando Funções Auxiliares
// Retornar o objeto por Id
function buscarNomePorId(id) {
  return nomes.filter((nome) => nome.id == id)
}

// Pegar a posição ou index do elemento do Array por id
function buscarIdNomes(id) {
  return nomes.findIndex((nome) => nome.id == id);
}

// Rota Principal
app.get("/", (req, res) => {
  res.send("Rota principal");
});

// Rota teste
app.get("/teste", (req, res) => {
  res.send("API nodePeople está funcionando!");
});

// Buscando nomes (listaNomes)
app.get("/listaNomes", (req, res) => {
  res.send(nomes);
});

// Buscando por ID
app.get("/listaNomes/:id", (req, res) => {
  let index = req.params.id;

  res.json(buscarNomePorId(index))
});

// Criando Post para cadastrar
app.post("/listaNomes", (req, res) => {
   nomes.push(req.body);
   res.status(201).send('Nomes cadastrado com sucesso!');
});


// Criando Rota Excluir
app.delete("/listaNomes/:id", (req, res) => {
  const id = req.params.id;
  const index = buscarIdNomes(id);

  // Se não encontrar, retorna erro ddd
  if (index === -1) {
    return res.status(404).send(`Nenhum nome com id ${id} foi encontrado.`);
  }

  // Remove apenas se existir
  nomes.splice(index, 1);
  res.send(`Nome com id ${id} excluído com sucesso!`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});