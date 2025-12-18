import express from "express";
import conexao from "../infra/conexao.js";

const router = express.Router();

// Buscar todas as seleções 
router.get('/selecoes', (req, res) => {
    const sql = "select * from selecoes";

    conexao.query(sql, (erro, result) => {
        res.json(result);
    });
});

// Buscando por ID
router.get('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = "select * from selecoes where id=?;";

    conexao.query(sql, id, (erro, result) => {
        res.json(result[0]);
    });
});

// Criando POST para cadastrar 
router.post('/selecoes', (req, res) => {
    const selecao = req.body;
    const sql = "INSERT INTO selecoes SET?;";

    conexao.query(sql, selecao, () => {
        res.json({ mensagem: "Cadastrado com sucesso!"});
    })
});

// Deletando registro




export default router;