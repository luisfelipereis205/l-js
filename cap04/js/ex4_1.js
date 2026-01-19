const frm = document.querySelector("form")
const saida1 = document.querySelector("#outMedia")
const saida2 = document.querySelector("#outSituacao")

frm.addEventListener("submit", (e) => {
    
    e.preventDefault()

    const nome = frm.inName.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

    const media = Number((nota1 + nota2)/2)

    saida1.innerText =`Média das notas: ${media.toFixed(1)}`

    if (media >= 7) {
        saida2.innerText = `Parabéns ${nome} Você foi Aprovado(a)!`
        saida2.style.color = "green"
    } else if (media >= 4) {
        saida2.innerText = `${nome} Você está de recuperação.`
        saida2.style.color = "blue"
    }  // decide colocar a condição else if para informar que se o aluno tiver uma média igual a 4 e menor que 7, ele está de recuperação.
    
    else {
        saida2.innerText =`Ops ${nome} Você foi reprovado(a)`
        saida2.style.color ="red"
    }
})