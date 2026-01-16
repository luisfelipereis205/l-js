const frm = document.querySelector("form")
const resp1 = document.querySelector("#outPromocao1")
const resp2 = document.querySelector("#outPromocao2")

frm.addEventListener("submit", (e) => {

    const texto = frm.inName.value
    const price = Number(frm.inPrice.value)

    const promocao = (price * 3) - (price/2)

    resp1.innerText = `${texto} - Promoção: Leve 3 por R$: ${promocao.toFixed(2)}`
    resp2.innerText = `O 3º produto custa apenas: R$ ${price/2},00`

    e.preventDefault()
})