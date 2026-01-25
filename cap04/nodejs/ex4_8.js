//Uma farmácia necessita de um programa que leia o total de uma compra. Exiba como resposta o nº máximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. Considere as seguintes condições: a) cada parcela deve ser de, no mínimo, R$ 20,00 b) o número máximo de parcelas permitido é 6.

const prompt = require("prompt-sync")()

const total = Number(prompt("Valor total: R$"))
const aux = Math.floor(total / 20)

let parcelas
if (aux == 0) {
    parcelas = 1
} else if (aux > 6) {
    parcelas = 6
} else {
    parcelas = aux
}
const valorParcelas = total / parcelas

console.log(`Valor da compra: R$ ${total.toFixed(2)}`)
console.log(`Pode pagar em ${parcelas}x de R$ ${valorParcelas}`)
|