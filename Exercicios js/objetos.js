const meuObjeto = {};

Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: true
}); //Object.defineProperty(nome do objeto, nome da propriedade, {configurações da propriedade})

for (let chave in meuObjeto) {
  console.log(chave); // Saída: (nenhuma, pois não há propriedades enumeráveis)
}
console.log(meuObjeto)