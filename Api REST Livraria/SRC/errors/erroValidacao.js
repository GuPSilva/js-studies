import RequisicaoIncorreta from "./requisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
    constructor(erro){
        const mensagensError = Object.values(erro.errors)
        .map(erro => erro.message)
        .join("; "); 

        super(`Os seguintes erros foram encontrados ${mensagensError}`);
    }
};

export default ErroValidacao;