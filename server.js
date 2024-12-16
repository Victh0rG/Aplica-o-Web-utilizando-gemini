import express from "express";
import routes from "./src/config/routes/postRoutes.js";

const app = express();
routes(app);


app.listen(5000, () => {
    console.log("Servidor escutando...");

});
