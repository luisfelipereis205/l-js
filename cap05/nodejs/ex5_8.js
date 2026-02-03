// A copa do Mundo ocorre de 4 em 4 anos, desde 1930, exceto nos anos de 1942 e 1946 (Segunda Guerra Mundial). Construir um programa que repita a leitura de números (anos) até ser digitado 0. Informe para cada ano se ele é ou não ano de Copa.
const prompt = require("prompt-sync")()

console.log("Programa Anos de Copa do Mundo. Digite 0 para sair")


do {
    const ano = Number(prompt("Ano: "))

    const inicio = 1930
    
     if(ano == 0){
        console.log("bye bye")
        break
    } else if ( ano == 1942 || ano == 1946){
        console.log("Não teve copa devido a Guerra")
        break
    }

    if(ano % 4 == 2 && ano >= 1930) {
        console.log(`Sim! ${ano} é ano copa`)
    } else {
        console.log(`Não ${ano} não é ano de copa`)
    } 
} while(true)





