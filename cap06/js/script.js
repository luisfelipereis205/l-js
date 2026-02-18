const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inPaciente.value //obtem o nome digitado

    pacientes.push(nome) //adiciona o nome no final da array

    let lista = "" //variável para concatenar os nomes da array

    // for tradicional (inicia em 0, enquanto menor que tamanho array)
    for (let i = 0; i < pacientes.length; i++) {
        lista = lista + `${i + 1}. ${pacientes[i]}\n` //concatena o número do paciente e o nome
    }

    respLista.innerText = lista //exibe a lista de pacientes
    frm.inPaciente.value = "" //limpa o campo de entrada
    frm.inPaciente.focus() //posiciona o cursor no campo de entrada
})


// Adiciona um "ouvinte" para o evento click no btUrgencia que está no form
frm.btnUrgencia.addEventListener ("click", () => {
    // verifica se as validações do form estão ok (no caso, paciente is requerid)
    if (!frm.checkValidity()) { // verifica se o form é válido ou não
        alert("Informe o nome do paciente a ser atendido em caráter de urgência")
        frm.inPaciente.focus()
        return // retorna ao form
    }

    const nome = frm.inPaciente.value
    pacientes.unshift(nome) //adiciona paciente no inicio do vetor 
    let lista = ""
    // forEach aplicado sobre o array paciente
    pacientes.forEach((paciente, i) => (lista = lista +  `${i + 1}. ${paciente}\n`))
    
    respLista.innerText = lista 
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
    
})

frm.btnAtender.addEventListener("click", () => {    // se o tamanho do vetor = 0
    if (pacientes.length === 0 ) {
        alert("Não há pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }

    const atender = pacientes.shift () //remove do inicio da fila (e obtém o nome)
    respNome.innerText = atender
    let lista = ""
    pacientes.forEach((paciente, i ) => (lista = lista + `${i + 1}. ${paciente}\n`))

    respLista.innerText = lista 
})