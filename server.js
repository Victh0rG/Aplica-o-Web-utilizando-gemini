import express from "express";
import routes from "./src/config/routes/postRoutes.js";

// Inicializa a aplicação Express
const app = express();

// Configura as rotas da aplicação importadas do arquivo postRoutes.js
routes(app);

// Configura o servidor para ouvir na porta 5000
app.listen(5000, () => {
    console.log("Servidor escutando...");
});
