
const coupons = [
    {
        discount: 0,
    },
    {
        name: "Platzi",
        discount: 10,
    },
    {
        name: "Learn",
        discount: 15,
    },
    {
        name: "Growth",
        discount: 20,
    },
];

function priceWithDiscountCalculate(){
    const price = document.getElementById("inputPrice");
    const discount = document.getElementById("inputDiscount");
    const priceValue = Number(price.value);
    const discountValue = Number(discount.value);
    const priceWithDiscountFinal = priceWithDiscount(priceValue , discountValue);
    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El  precio final con Descuento es de $" + Number(priceWithDiscountFinal).toLocaleString("de-DE", {minimumFractionDigits: 0});;
}

function priceWithDiscount(price, discount){
    const user = document.getElementById("inputCoupon");
    const userCoupon = Number(user.value);
    const coupon = coupons[userCoupon].discount
    console.log(coupon);
    discountRate = (discount + coupon) / 100;
    const priceWithDiscount = price * (1- discountRate);
    return priceWithDiscount;
}    
