let jogos = [3]
function alterarStatus(id){
    let btn = document.querySelectorAll(`#game-${id} .dashboard__item__img, 
        #game-${id} .dashboard__item__button`)
    escolhaJogo(btn);
};

function escolhaJogo(jogo){
    
    const img = jogo[0];
    const botao = jogo[1];

    if(botao.classList.contains('dashboard__item__button--return')){
        confirmaDevolucao(jogo, img, botao);
    }else{
        img.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML=`Devolver`;
        jogos.push(jogo);
        console.clear();
        console.log(`Há ${jogos.length} alugados`);
    };  
};

function confirmaDevolucao(jogo,img, botao){
    if(confirm(`Deseja devolver este jogo?`)){
        
        jogos.splice(jogos.length - 1);
        img.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML=`Alugar`;
        console.clear();
        console.log(`Há ${jogos.length} alugados`);
    }else{
        alert('Não devolvido');
    };
};



