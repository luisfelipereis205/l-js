frm = document.querySelector("form"); 
resp1 = document.querySelector("#medicPromotion");
resp2 = document.querySelector("#valorPromotion");


frm.addEventListener("submit", (e) => {

    const medName = frm.inMediction.value;
    const medPrice = Number(frm.inPreco.value);

    const promocao = Math.floor(Number(medPrice * 2));
    
    resp1.innerText = `Promoção de ${medName}`;
    resp2.innerText = `Leve 2 por apenas R$ ${promocao.toFixed(2)}`; 

    e.preventDefault();
})