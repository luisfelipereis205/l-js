// Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triângulo. Para um triângulo, um dos lados não pode ser maior que a soma dos outros dois. Caso possam formar um triângulo, exiba também qual o tipo de triângulo: Equilátero (3 lados iguais), Isóseles (2 lados iguais) e Escaleno (3 diferentes)

const prompt = require("prompt-sync") ()

console.log("Programa Lados de um Triângulo")

const lado1 = Number(prompt("Lado A: ")) 
const lado2 = Number(prompt("Lado B: "))
const lado3 = Number(prompt("Lado C: "))

if (((lado1 + lado2) < lado3) || ((lado2 + lado3) < lado1) || ((lado1 + lado3) < lado2)) {
    console.log("Impossivel formar um Triângulo com essas medidas")
    return    
}

let tipo
if (lado1 === lado2 && lado1 === lado3) {
    console.log("Essas medidas formam um Triângulo")
    tipo = `Equilátero`
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Essas medidas formam um Triângulo")
    tipo = `Isóseles`
} else if (lado1 !== lado2 && lado1 !== lado3) {
    console.log("Essas medidas formam um Triângulo")
    tipo = `Escaleno`
}
console.log(`Tipo: ${tipo}`)