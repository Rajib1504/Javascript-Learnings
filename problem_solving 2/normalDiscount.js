/**
 * upto 100 : ---> 100
 * more than 101 - 200 --> 90
 * more than 200 -- >70
 * question is if you will buy 100 pc you need to pay 100 rs of if you want to buy more than 100 then yo can pay me 90 rs or if you want to buy more than 200 then your price will be 70 rs.
 */
function quantityDiscount(numbers) {
  if (numbers <= 100) {
    const total = numbers * 100;
    return total;
  } else if (numbers > 100 && numbers < 200) {
    const total = numbers * 90;
    return total;
  } else {
    const total = numbers * 70;
    return total;
  }
}
const priceTag = quantityDiscount(200);
console.log(priceTag);
