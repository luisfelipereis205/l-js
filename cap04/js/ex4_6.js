const frm = document.querySelector("form")
const resp1 = document.querySelector("#inNota1")
const resp2 = document.querySelector("#inNota2")
const resp3 = document.querySelector("#inNota3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const saque = Number(frm.inValor.value)

    if (saque % 10 !== 0) {
        alert("Esse valor não pode ser pago com as notas disponíveis (R$ 10, 50, 100")
        frm.inValor.focus()
        return
    }

    // Calcular a quantidade de notas de R$ 100,00
    const notasCem = Math.floor(saque / 100)
    // calcular o resto do valor
    let resto = saque % 100 

    // Calcular a quantidade de notas de R$ 50,00
    const notasCinquenta = Math.floor(resto / 50)
    // calcular o resto do outro resto
    resto = resto % 50 

    // Calcular a quantidade de notas de R$ 10,00
    const notasDez = Math.floor(resto / 10)

    // Exibição das notas 

    if (notasCem > 0) {
        resp1.innerText =`Quantidade de notas de R$ 100,00: ${notasCem}`
    }
    if (notasCinquenta > 0) {
        resp2.innerText =`Quantidade de notas de R$ 50,00: ${notasCinquenta}`
    }
    if (notasDez > 0) {
        resp3.innerText = `Quantidade de notas de R$ 10,00: ${notasDez}`
    }
})