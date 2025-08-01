import mongoose from "mongoose";
import ErroBase from "../errors/erroBase.js";
import RequisicaoIncorreta from "../errors/requisicaoIncorreta.js";
import ErroValidacao from "../errors/erroValidacao.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros (erro, req, res, next) {
    if(erro instanceof mongoose.Error.CastError){
        new RequisicaoIncorreta().enviarRespostas(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ErroValidacao().enviarRespostas(res);
    } else if (erro instanceof ErroBase){
        erro.enviarRespostas(res);
    } else if(erro instanceof TypeError) {
        res.status(400).json({message: "Erro de acesso a propriedade"});
    } else {
        new ErroBase().enviarRespostas(res);
    };
};

export default manipuladorDeErros;