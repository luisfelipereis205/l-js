const forms = document.querySelector("form");
const rsp1 = document.querySelector(".resposta1");
const rsp2 = document.querySelector(".resposta2");
const rsp3 = document.querySelector(".resposta3");

forms.addEventListener("submit", (e) => {
    const nomecar = forms.nomeVeiculo.value;
    const valorCar = Number(forms.precoVeiculo.value);

    const entrada = valorCar * 0.50;
    const valorParcela = (valorCar - entrada) / 12;

    rsp1.innerText = `Promoção: ${nomecar}`;
    rsp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
    rsp3.innerText = `+12x de R$: ${valorParcela.toFixed(2)}`;
    e.preventDefault()
});

/* 

            maneira 2

// cria referencia ao form e aos elementos h3 e h4 (onde será exibida a resposta através de seus ids)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
const veiculo = frm.inVeiculo.value; // obtém o nome do veículo digitado no form

const preco = Number(frm.inPreco.value); // obtém o preço do veículo

const entrada = preco * 0.5; // calcula o valor da entrada (50% do preço)
const parcela = (preco * 0.50) / 12; // calcula o valor das 12 parcelas

resp1.innerText = `Promoção: ${veiculo}`; // exibe o nome do veículo
resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`; // exibe o valor da entrada formatado
resp3.innerText = `+12x de R$: ${parcela.toFixed(2)}`; // exibe o valor das parcelas formatado
e.preventDefault(); // evita o envio do form
}}; */