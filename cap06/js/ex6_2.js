const frm = document.querySelector("form")
const respErro = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDicas = document.querySelector("#outDica")

const erros = []
const sorteado = Math.floor(Math.random() * 100) + 1 // num aleatório entre 1 e 100
const CHANCES = 6

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    if (numero == sorteado ) {
        respDicas.innerText = `Parabéns, você acertou o número!! Número sorteado: ${sorteado}`
        frm.btSubmit.disabled = true // troca status dos botões
        frm.btNovo.className = "exibe"
    } else {
        if (erros.includes(numero)){ // se o número inserido ja existe no vetor "erros" (ja apostou)
        alert(`Você ja apostou o número ${numero}. Tente outro...`)
        } else {
            erros.push(numero) // adiciona numero ao vetor
            const numErros = erros.length
            const numChances = CHANCES - numErros // calcula o numero de chances 
            // exibe nº de erros, conteúdo do veotr e nº de chances
            respErro.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            if (numChances == 0) {
                alert("Suas chances acabaram...")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDicas.innerText = `Gamer Over!! Número Sorteado: ${sorteado}`
            } else {
                // usa operador ternário para mensagem de dica 
                const dica = numero < sorteado ? "maior" : "menor"
                respDicas.innerText =  `Dica: Tente um número ${dica} que ${numero}`
            }
        }
        
    }

    frm.btNovo.addEventListener("click", () => {
        location.reload() // recarrega a página
    })

    frm.inNumero.value = ""
    frm.inNumero.focus()
})