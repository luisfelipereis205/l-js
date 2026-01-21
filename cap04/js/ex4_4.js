const frm = document.querySelector("form")
const exit = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const brazil = Number(frm.inTime.value)
    
    let horasFranca = brazil + 5
    
    if (horasFranca > 24) {
        horasFranca = horasFranca - 24
    }

    exit.innerText = `Hora na França: ${horasFranca.toFixed(2)}`
})

frm.addEventListener("reset", (e) => {

    exit.innerText = ""
})