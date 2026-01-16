const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    const price = Number(frm.inPrice.value)
    const time = Number(frm.inTime.value)

    const total = Math.ceil((time / 15))* price
    resp1.innerText = `Valor total a pagar: R$ ${total.toFixed(2)}`

    e.preventDefault()
})