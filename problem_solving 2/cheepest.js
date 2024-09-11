const mobiles = [
  { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "Xoami", price: 35000, camera: "12mp", color: "black" },
  { name: "vivo", price: 38000, camera: "12mp", color: "black" },
  { name: "Realme", price: 12000, camera: "12mp", color: "black" },
  { name: "Iphone", price: 120000, camera: "12mp", color: "black" },
];
// get form here chepest mobile
function buyChepest(phones) {
  let lowPrice = phones[0];
  for (const ph of phones) {
    if (ph.price < lowPrice.price) {
      //in object you cant to compare between ph and lowprice because you will compare in price so you need to go inside
      lowPrice = ph;
    }
  }
  return lowPrice;
}
const chepOne = buyChepest(mobiles);
console.log(chepOne);

// height price phone
function topPhone(phones) {
  let topPrice = phones[0];
  for (const ph of phones) {
    if (ph.price > topPrice.price) {
      topPrice = ph;
    }
  }
  return topPrice;
}
const top = topPhone(mobiles);
console.log(top);
