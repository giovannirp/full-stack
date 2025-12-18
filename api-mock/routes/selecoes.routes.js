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

export default router;