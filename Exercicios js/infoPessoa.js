// const pessoas = [{
//     nome: 'Gustavo',
//     idade: 22,
//     cidade: 'Sapucaia do Sul'
//     },
//     {
//     nome: 'Gabriel',
//     idade: 15,
//     cidade: 'Esteio'
//     },
//     {
//     nome: 'Julia',
//     idade: 23,
//     cidade: 'Canoas'
//     }, 
// ];


// pessoas.push({
//     nome: 'William',
//     idade: 26,
//     cidade: 'Porto Alegre'
//     }
// );

// function mostrarInfoPessoa(pessoasInfo){
//     pessoasInfo.forEach(elemento => {
//       console.log(`Nome: ${elemento.nome}`);
//       console.log(`Idade: ${elemento.idade}`);
//       console.log(`Cidade: ${elemento.cidade} \n`);  
//     });
// };

// //mostrarInfoPessoa(pessoas);



// function filtrarPorCidade(infoPessoa, cidade){
//     return infoPessoa.filter(valor => valor.cidade === cidade);
// };

// const pessoaFiltrada = filtrarPorCidade(pessoas, "Porto Alegre");
// console.log(pessoaFiltrada);


// const calculadora = {
//     soma: function(num1, num2){
//         return num1 + num2
//     },
//     substracao: function(num1, num2){
//         return num1 - num2
//     },
//     multiplicacao: function(num1, num2){
//         return num1 * num2
//     },
//     divisao: function(num1, num2){
//         if(num2 !== 0){
//             return num1 / num2
//         }else{
//             return 'Divisão por zero não é possível'
//         };
//     },
//     calculaMedia: function(valores){
//         let somaNumeros = 0
//         for(let indice of valores){
//             somaNumeros += indice
//         }
//         return somaNumeros / valores.length
//     }
// };

// const medias = [4, 5, 7, 3.5, 10];

// console.log(calculadora.soma(2, 3));
// console.log(calculadora.substracao(10, 4));
// console.log(calculadora.multiplicacao(3, 3));
// console.log(calculadora.divisao(4, 3));
// console.log(calculadora.calculaMedia(medias));

const contaBancaria = {
    titular: "Gustavo Perugorria",
    saldo: 10000,
    depositar: function(valorDeposito){
        return this.saldo += valorDeposito
    },
    sacar: function(valorSacado){
        if(valorSacado <= this.saldo){
        return this.saldo -= valorSacado
        }else{
            return 'Valor de saldo insuficiente para saque'
        };
    }
};

const cliente = {
    nome: "Gustavo Perugorria",
    conta: contaBancaria
};
cliente.conta.depositar(20000);
cliente.conta.sacar(3000);

function mostrarSaldo(cliente){
    console.log(`Nome do Cliente: ${cliente.nome}\nSeu saldo é de: R$${cliente.conta.saldo}`);
};
mostrarSaldo(cliente);