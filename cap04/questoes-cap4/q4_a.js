const frm = document.querySelector("form")
const saida = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const number = Number(frm.inNumber.value)

    
    if (number % 2 === 0) {
        saida.innerText = `${number} é par`
    } else {
        saida.innerText = `${number} é impar`
    }
})

// const resposta = number % 2 === 0 ? "É par" : "É impar"  
// saida.innerText = `${numero} ${resposta}`