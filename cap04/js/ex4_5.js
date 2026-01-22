const frm = document.querySelector("form")
const exit = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const number = Number(frm.inNumber.value)

    let raiz = Math.sqrt(number)
    if (Number.isInteger(raiz)) {
        exit.innerText = `Raiz: ${raiz}`
    } else {
        exit.innerText = `Não há raiz exata para ${number}`
    }
})
