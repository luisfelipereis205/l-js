// Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadriêncio) o funcionário recebe um acréscimo de 1% no salário, calcule e informe o número de quadriênio a que o funcionário tem direito e o salário final. 
const prompt = require("prompt-sync")()
const salario = Number(prompt("Digite o valor do salário: "))
const tempo = Number(prompt("Digite quanto tempo trabalha na empresa: "))
const quadrienio = Math.floor((tempo / 4))
const acrescimo = (salario + (salario * 0.01) * (quadrienio))
console.log(`Tempo do funcionário na empresa (anos): ${tempo}`)
console.log(`Quadriênio: ${quadrienio}`)
console.log(`Salário final: ${acrescimo}`)

