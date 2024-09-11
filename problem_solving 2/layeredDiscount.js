// layer discount means discount over some certain nuber:
// suppose if the offer is over the 100pc then if you will buy 130 pc then you will get the offers over the 30 procuct only
/**
 * upto 100 : ---> 100
* more than 101 - 200 --> 90
* more than 200 -- >70
the question is first 100 iron cost will be acording to 100 rs  then next < 100 iron will be acording to the 90 rs then remaining all will count acording the 70 rs
 */
function layerDiscount(quantity) {
  const first100 = 100;
  const second90 = 90;
  const third70 = 70;
  if (quantity <= 100) {
    let firstTotal = quantity * 100;
    // console.log(firstTotal);
    return firstTotal;
  } else if (quantity <= 200) {
    let firstTotal = 100 * first100; //first 100 quantities will devecible by the first price
    const remaining = quantity - 100; //getting the remaing value for 2nd offer
    const secondTotal = remaining * second90; // multiplying with the offer
    const total2ndBill = firstTotal + secondTotal;
    // console.log(total2ndBill);
    return total2ndBill;
  } else if (quantity >= 200) {
    let remaing1stQ = quantity - 100;
    let firstTotal = 100 * first100;
    let remaing2ndQ = remaing1stQ - 100;
    let secondTotal = 100 * second90;
    // let totalRemaingQuantity = remaing2ndQ;
    let Total = remaing2ndQ * third70;
    const thirdTotalValue = firstTotal + secondTotal + Total;
    return thirdTotalValue;
  }
}
const afterDiscout = layerDiscount(250);
console.log("the price for iron after all offer ", afterDiscout);
