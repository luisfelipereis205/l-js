const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")



frm.addEventListener("submit", (e) =>{

    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    let numDivisores = 0

    for (let i = 1; i <= numero; i++){
        if (numero % i == 0) {
            numDivisores++
        }
    }

    if (numDivisores == 2) {
        resp.innerText = `${numero} É primo`
    } else {
        resp.innerText = `${numero} Não é primo`
    }
})