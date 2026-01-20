const frm = document.querySelector("form")
const result = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    
    e.preventDefault()

    const name = frm.inName.value
    const sexoM = frm.inMasculino.checked
    const height = Number(frm.inAltura.value)

    let peso
    if (sexoM) {
        peso = 22 * Math.pow(height,2)
    }  else {
        peso = 21 * Math.pow(height,2)
    }
    
    result.innerText = `${name}: Seu peso ideal é ${peso.toFixed(3)} kg`

})

frm.addEventListener("reset", (e) => { // Limpa o conteúdo exibido
    result.innerText = ""
})