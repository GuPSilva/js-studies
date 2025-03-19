function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let deNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);
    
    if (deNumero > ateNumero){
        alert("O valor minimo não pode ser maior que o valor máximo!");
        limparCampos();
        return;
    }
    if(quantidade < (max - min + 1)){
        alert("A quantidade de numeros deve ser menor ou igual ao intervalo informado");
        limparCampos();
        return;
    }
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = gerarNumeroAleatorio(deNumero, ateNumero);
        while(sorteados.includes(numero)){
            numero = gerarNumeroAleatorio(deNumero, ateNumero);
        };
        sorteados.push(numero);
    };

    resultado.innerHTML=`<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    botaoReinciar();
    
};

function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function botaoReinciar(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    };
};
function limparCampos(){
    quantidade = parseInt(document.getElementById('quantidade').value = '');
    deNumero = parseInt(document.getElementById('de').value = '');
    ateNumero = parseInt(document.getElementById('ate').value = '');
};

function reiniciar(){
    limparCampos();
    botaoReinciar();
};