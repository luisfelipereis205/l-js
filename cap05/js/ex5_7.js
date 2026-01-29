const frm = document.querySelector("form")
const resp = document.querySelector("h3")



let estrelas = ""

frm.addEventListener("submit", (e) => {

    e.preventDefault()
    const num = Number(frm.inNumero.value)
    
    for (let i = 1; i <= num ; i++) {
      if(i % 2 == 1 ) {
            estrelas = estrelas + "*"
        } else {
            estrelas = estrelas + "-"
        }
    }
    resp.innerText = estrelas
})