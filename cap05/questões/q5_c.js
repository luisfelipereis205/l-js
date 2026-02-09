/* Elaborar um programa que leia um número e verifique se ele é ou não perfeito. Um número dito perfeito é aquele que é igual à soma dos seus divisores inteiros (exceto o próprio número). O programa deve exibir os divisores do número e a soma deles.*/

const prompt = require("prompt-sync")()

console.log("Programa Número Perfeito")

const number = Number(prompt("Número: "))

let soma = 0 
let divisores = ""

for (let i = 1; i < number; i++) {
    if (number % i === 0) {
        soma = soma + i 
        divisores = divisores + i + " "
    }
    
}
console.log(`Divisores de ${number}: ${divisores} (Soma: ${soma})`)
if (number === soma) {
    console.log(`${number} é um número perfeito!`)
} else {
    console.log(`${number} não é um número perfeito!`)
}