const animaisDados = require('./animais.json');


const novoAnimal = {
    id: 4,
    nome: "Gato",
    tipo: "Mámifero",
    habitat: "Casas",
};
animaisDados.animais.push(novoAnimal);

const modificaHabitat = animaisDados.animais.find((animal) => animal.id === 3)
if(modificaHabitat){
    modificaHabitat.habitat = "cu do conde"
};
const indiceAnimalRemover = animaisDados.animais.findIndex((animal) => animal.id === 1)
if(indiceAnimalRemover !== -1){
    animaisDados.animais.splice(indiceAnimalRemover, 1)
}

const animaisString = JSON.stringify(animaisDados);
console.log(animaisString);


const pessoa = {
    id: 1,
    nome: "Alice",
    idade: 30
}

function mudaObjeto(objeto){
    return JSON.parse(JSON.stringify(objeto))    
};

const copiaObjeto = mudaObjeto(pessoa);

copiaObjeto.idade = 42

console.log(pessoa);
console.log(copiaObjeto);

