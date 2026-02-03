// c) Elaborar um programa para uma loja que leia o valor de uma conta e o número de vezes que um cliente deseja parcelar esse valor (em boletos ou carnê). Para facilitar o troco, o lojista deseja que as parcelas iniciais não tenham centavos. ou seja, centavos apenas na última parcela. Informe como resposta o valor de cada parcela considerando a situação.
const prompt = require("prompt-sync")()


const valorConta = Number(prompt("Valor da conta: "))
const numeroParcelas = Number(prompt("De quantas vezes: "))

const parcelas = Math.floor(valorConta / numeroParcelas)
const valorFinal = parcelas + (valorConta % numeroParcelas)

for (i = 1; i < numeroParcelas; i++) {

    console.log(`${i}ª parcela: ${parcelas.toFixed(2)}`)
}
console.log(`${numeroParcelas}ª parcelas: ${valorFinal.toFixed(2)}`)