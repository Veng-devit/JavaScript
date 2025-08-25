const prices=[10, 20, 30, 40];
const discountedPrices=prices.map(price=>(price*80)/100);
console.log("Map method:" , discountedPrices);
function printDiscount(price){
    console.log("Discounted price: $", price);
}

discountedPrices.forEach(printDiscount);
