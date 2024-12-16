import express from "express";
import {listarPosts, postarNovoPOst} from "../controlers/postControler.js";

const routes = (app) => {
    // Permiter que o servidor interprete requisições 
    app.use(express.json());
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPOst);
}

export default routes;