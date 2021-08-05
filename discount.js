
function priceWithDiscountCalculate(price, discount){
    discountRate = discount / 100;
    const priceWithDiscount = price * (1- discountRate);
    return priceWithDiscount;
}