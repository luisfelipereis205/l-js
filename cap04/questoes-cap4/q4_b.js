const frm = document.querySelector("form")
const saida = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const velocidadePermit = Number(frm.inNumber.value)
    const velocidadeCondut = Number(frm.inNumberc.value)

    let situacao
    if (velocidadeCondut <= velocidadePermit) {
        situacao = ("Sem multa")
    } else if ((velocidadeCondut <= (1.20 *   velocidadePermit))) { 
        situacao = ("Multa leve")
    } else if (velocidadeCondut > (1.20 * velocidadePermit)) {
        situacao = ("Multa Grave")
    } 

    saida.innerText = `Situação: ${situacao}`
})
