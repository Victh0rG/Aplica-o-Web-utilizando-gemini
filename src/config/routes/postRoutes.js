import express from "express";
import { listarPosts, postarNovoPOst } from "../controlers/postControler.js";

// Configuração das rotas relacionadas aos posts
const routes = (app) => {
    // Permite que o servidor interprete o corpo das requisições em formato JSON
    app.use(express.json());

    // Define a rota para listar posts (GET /posts)
    app.get("/posts", listarPosts);

    // Define a rota para criar um novo post (POST /posts)
    app.post("/posts", postarNovoPOst);
}

export default routes;
