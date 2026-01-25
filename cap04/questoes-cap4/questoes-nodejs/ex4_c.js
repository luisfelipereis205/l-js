// Elaborar um programa para simular um parquímetro, o qual leia o valor de moedas depositado em um terminal de estacionamento rotativo. O programa deve informar o tempo de permanência do veículo e o troco (se existir). Se o valor for inferior ao tempo mínimo, exiba a mensagem: "Valor insuficiente"

const prompt = require("prompt-sync") ()


console.log("Programa paquímetro")

const moeda = Number(prompt("Valor: R$ "))


if (moeda < 1 ) {
    console.log("Valor insuficiente")
    return
}

const temp1 = 1
const temp2 = 1.75
const temp3 = 3.00

const sobra1 = moeda - temp1
const sobra2 = moeda - temp2
const sobra3 = moeda - temp3 

let tempo
if (moeda === temp1) {
    tempo = ` 30 min`
} else if (moeda < temp2) {
    tempo = `30 min`
    console.log(`Troco: R$ ${sobra1}`)
} else if (moeda === temp2) {
    tempo = `60 min`
} else if (moeda < temp3) {
    tempo = `60 min`
    console.log(`Troco: ${sobra2}`)
} else if (moeda === temp3) {
    tempo = `120 min`
} else if (moeda > temp3) {
    tempo = `120 min`
    console.log(`Troco: ${sobra3}`)
}

console.log(`Tempo: ${tempo}`)

