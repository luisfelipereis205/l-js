// Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração (em grmas). 
const prompt = require("prompt-sync")() 

const peso = Number(prompt("Peso da ração(Kg): "))
const consumo = Number(prompt("Consumo por dia(g): "))

// Kg -- g
const conversao = peso*1000

//Quantos dias irá durar
const duracao = Math.floor((conversao/consumo))
// Quanto irá sobrar da ração em gramas
const sobra = (conversao % consumo)

//exbir quantos dias irá durar a ração
console.log(`Duração em dias: ${duracao} dias`)
console.log(`Sobras em grmas: ${sobra}g`)