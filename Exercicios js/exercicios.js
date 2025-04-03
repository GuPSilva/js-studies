const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
];

function encontrarLivroPorId(id){
   return biblioteca.find(livro => livro.id === id) || null;
};

const livroEncontrado = encontrarLivroPorId(5);

console.log(livroEncontrado);

const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
];

function filtrarFilmesPorAno(ano){
   return catalogoFilmes.filter((filmes) => filmes.anoLancamento === ano)
};

const filmesFiltrados = filtrarFilmesPorAno(1999);

console.log(filmesFiltrados);

const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
];

function filtrarOrdenarProdutosPorPreco(maxPreco){
    const produtoFiltrado = listaProdutos.filter((produto) => produto.preco <= maxPreco)
    return produtoFiltrado.sort((a, b) => a.preco - b.preco);
};

const produtosPorPeco = filtrarOrdenarProdutosPorPreco(50.00);
console.log(produtosPorPeco);


const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
];

function ordenarAnimais(comparacao){
    return animais.sort(comparacao);
};

function compararIdadeCrescente(a, b) {
   return a.idade - b.idade;
};

function compararIdadeDecrescente(a, b) {
    return b.idade - a.idade;
};

const comparaAnimaisCrescente = ordenarAnimais(compararIdadeCrescente);
console.log(comparaAnimaisCrescente);
const comparaAnimaisDecrescente = ordenarAnimais(compararIdadeDecrescente);
console.log(comparaAnimaisDecrescente);


const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
];

function encontrarFuncionarioPorId(id){
    for(const departamento of departamentos){
        const funcionarioEncontrado = departamento.funcionarios.find((funcionario) => funcionario.id === id)
        if(funcionarioEncontrado){
            return funcionarioEncontrado
        }
    }
    return null
};

const funcionariosEncontrados = encontrarFuncionarioPorId(202);
console.log(funcionariosEncontrados);
