
function comprar(){ 
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let qtdDisponivel = tipoIngresso(ingresso);
    if(quantidade > qtdDisponivel.textContent){
        alert("Não há ingressos disponiveis")
        return;
    }else{
        let qtdRestante = qtdDisponivel.textContent - quantidade;
        
        qtdDisponivel.textContent =`${qtdRestante}`;
        alert(qtdDisponivel.textContent);

    };
};

function tipoIngresso(cadeira){
    let cadeiraIngresso;
    if(cadeira == 'superior'){
        cadeiraIngresso = document.getElementById('qtd-superior');
        return cadeiraIngresso; 
    }else if(cadeira == 'inferior'){
        cadeiraIngresso = document.getElementById('qtd-inferior');
        return cadeiraIngresso;
    }else if(cadeira == 'pista'){
        cadeiraIngresso = document.getElementById('qtd-pista');
        return cadeiraIngresso;
    };
};