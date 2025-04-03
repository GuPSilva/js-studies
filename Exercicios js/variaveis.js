/*const nomes = ['Gustavo', 'Julia', 'Gabriel', 'William'];


function exibeNomes(lista){
    for(let i; i<lista.length; i++){ 
      letomeslista = lista[i] + i;
    };
  return nomeslista;  
};*/

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

const novaLista = [... new Set(coresLista1.concat(coresLista2))];

console.log(novaLista);