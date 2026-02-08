const frm = document.querySelector("form");
const resp = document.querySelector("#outResp");

frm.addEventListener("submit", (e) => {

    e.preventDefault()


    const frut = frm.inFrut.value
    const number = Number(frm.inNumber.value)

    let espaco = ""

    for (let i = 1; i < number; i++) {
        espaco = espaco + `${frut}` + " * " 
    }

    resp.innerText = `${espaco}` + `${frut}`
})