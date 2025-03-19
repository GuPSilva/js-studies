let listaAmigos = [];
let amigosSorteados = [];
let amigosIncluidos = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');
let nomeAmigo = document.getElementById('nome-amigo');
function adicionar(){
   let addAmigo = nomeAmigo.value;
   if(nomeAmigo.value == ""){
    alert("Coloque um nome valido");
    return;
   }else if(listaAmigos.includes(nomeAmigo.value)){
    alert("Esse nome ja existe dentro do sorteio, escolha outro!");
    return;
   };
    listaAmigos.push(addAmigo);
    amigosIncluidos.textContent = `${listaAmigos.join(', ')}`;
   
};

function sortear(){
    if(listaAmigos.length < 4){
        alert("O sorteio deve conter pelo menos 4 amigos!");
        return;
    }
    amigosSorteados = [];
    let embaralhaLista = listaAmigos.sort(() => Math.random() - 0.5);
    for(i = 0; i < embaralhaLista.length; i++){
        let proximo = (i + 1) % embaralhaLista.length;
        let nomesSorteados = `${embaralhaLista[i]} -> ${embaralhaLista[proximo]}`;
        amigosSorteados.push(nomesSorteados);
    };
    listaSorteio.innerHTML = `${amigosSorteados.join("<br>")}`;
};
function reiniciar(){
    listaAmigos = [];
    amigosSorteados = [];
    amigosIncluidos.textContent = "";
    listaSorteio.textContent = ""; 
};

function remover(){
    
};