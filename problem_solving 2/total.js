const products = [
  { name: "shampoo", price: 300 },
  { name: "chiruni", price: 100 },
  { name: "shirt", price: 800 },
  { name: "pant", price: 1200 },
  { name: "parfume", price: 500 },
];
function giveSum(products) {
  let total = 0;
  for (const p of products) {
    total = total + p.price;
  }
  //   console.log(total);
  return total;
}
const items = giveSum(products);
console.log(items);
