const frms = document.querySelector("form");
const rsp = document.querySelector("h3");

frms.addEventListener("submit", (e) => {
    
    const valorKg = Number(frms.inValorKg.value);
    
    const consumG = Number(frms.inValorG.value);

    const precoFinal = (consumG / 1000) * valorKg;

    rsp.innerText = `Valor a pagar R$: ${precoFinal.toFixed(2)}`;

    e.preventDefault();
});    