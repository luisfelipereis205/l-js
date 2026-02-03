//b) Elaborar um programa que leia o nome de um produto e o número de etiquetas a serem impressas desse produto. Exiba as etiquetas com o nome do produto, com no máximo 2 etiquetas por linhas.

const prompt = require("prompt-sync")()
console.log("Programa Etiquetas")


    const nome = prompt("Produto: ")
    const numero = Number(prompt("Nº de Etiquetas: "))
    
    let espaco = ""

    for(let i = 1; i <= numero; i++ ){
        
        espaco = espaco + nome + "    "


        if (i % 2 === 0 || i === numero) {
            console.log(espaco)
            espaco = ""
        }
    }
