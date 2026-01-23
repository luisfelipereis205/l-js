//A entrada para um clube de pesca custa R$ 20,00 por pessoa e cada pessoa tem direito a levar um peixe.Peixes extras custam 12,00. Elabore um programa que leia o número de pessoas de uma família que foram ao clube e o número de peixes obtidos na pescaria. Informe o valor a pagar.

const prompt = require("prompt-sync")()

const peopleNu = Number(prompt("Number of people: "))
const numberFish = Number(prompt("Quantity of fish: "))

const entry = 20 * peopleNu

if (numberFish > peopleNu) {
    console.log(`Valor total: R$ ${(entry + ( 12 * (numberFish - peopleNu))).toFixed(2)}`)
} else {
    console.log(`Valor total: R$ ${entry.toFixed(2)}`)
}

