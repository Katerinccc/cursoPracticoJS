
function priceWithDiscount(price, discount){
    discountRate = discount / 100;
    const priceWithDiscount = price * (1- discountRate);
    return priceWithDiscount;
}

function priceWithDiscountCalculate(){
    const price = document.getElementById("inputPrice");
    const discount = document.getElementById("inputDiscount");
    const priceValue = Number(price.value);
    const discountValue = Number(discount.value);
    const priceWithDiscountFinal = priceWithDiscount(priceValue , discountValue);
    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El  precio con un descuento de " + discountValue + "% es de: $" + priceWithDiscountFinal;
}

