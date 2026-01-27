const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumber.value)

    let resposta = `Entre ${numero} e 1: ` // string pra mostrar a resposta
    
    for (let i = numero; i > 1; i--){

        resposta = resposta + i + ","
    }

    resposta = resposta + "1."


    /* for (let i = numero; i > 0; i--) { // Solução não recomendada
       
        if (i === 1){
            resposta = resposta + i + "."
        } else {
            resposta = resposta + i + ", "
        } 
    } */
    resp.innerText = resposta
})