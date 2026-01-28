const frm = document.querySelector("form")
const saida1 = document.querySelector("#outResp1")
const saida2 = document.querySelector("#outResp2")

let resposta = ""
let qtdContas = 0
let valTotal = 0 

frm.addEventListener("submit", (e) => {

    e.preventDefault()


    const descricao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)


    qtdContas++
    resposta = resposta + descricao + "- R$:" + `${valor.toFixed(2)}` + "\n"
    
    valTotal = valTotal + valor

    saida1.innerText = `${resposta} -----------------`
    saida2.innerText = `${qtdContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = ""
    frm.inValor.value = ""
    frm.inDescricao.focus()
})