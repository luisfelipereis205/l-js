/*Digamos que o número de chinchilas de uma fazenda triplica a cada ano. Escreva um programa que solicite ao usuário o número de chinchilas no primeiro ano e o número de anos, e imprima o número de chinchilas para cada ano.*/

const prompt = require("prompt-sync")()

console.log("Programa Criação de Etiquetas")

const numeroChinchilas = Number(prompt("Nº Chinchilas: "))
const ano = Number(prompt("Nº Ano: "))


let acumulador = numeroChinchilas
for (let i = 1; i <= ano; i++) {
    console.log(`${i}º Ano: ${acumulador} chinchilas`)
    acumulador = acumulador * 3
}

    
