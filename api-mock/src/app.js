import express from "express";
import selecoesRoutes from "../routes/selecoes.routes.js";

const app = express();

// Indicar para express ler o body com json
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Olá Copa do Mundo!");
});

// Usando a rota de selecões
app.use(selecoesRoutes);

export default app;