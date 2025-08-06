import express from "express";
import conectaNaDatabase from "./config/dbConect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const conexao = await conectaNaDatabase(); //funçao assincrona pois a conexao com o banco gera uma promise

conexao.on("error", (erro) => { //metodo usado para escutar evetos de conexões
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão feita com sucesso!");
});

const app = express();
routes(app);

app.use(manipulador404);

app.use(manipuladorDeErros);

export default app;
