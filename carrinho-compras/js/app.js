let totalGeral = 0;
let carrinho =  document.getElementById('lista-produtos').innerHTML = '';
let campoTotal = document.getElementById('valor-total').innerHTML = 'R$ 0';
function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; 
    let valorUnitario = produto.split('R$')[1];
    let quantidade = parseInt(document.getElementById('quantidade').value);
    if(quantidade >= 0 || isNaN(quantidade)){
        alert('A quantidade do produto deve ser valida!');
        limpar();
    }else{
        let preco = quantidade * valorUnitario;
        let carrinho =  document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML +`<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
            </section>`;

        totalGeral = totalGeral + preco;

        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`;
        
        quantidade = parseInt(document.getElementById('quantidade').value='');
     };    
};

function limpar(){
     totalGeral = 0;
     carrinho =  document.getElementById('lista-produtos').innerHTML = '';
     campoTotal = document.getElementById('valor-total').innerHTML = 'R$ 0';
     quantidade = parseInt(document.getElementById('quantidade').value='');
}


    
