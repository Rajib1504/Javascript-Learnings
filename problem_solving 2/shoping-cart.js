const products = [
  { name: "shampoo", price: 300, quantity: 5 },
  { name: "chiruni", price: 100, quantity: 2 },
  { name: "shirt", price: 800, quantity: 4 },
  { name: "pant", price: 1200, quantity: 3 },
  { name: "parfume", price: 500, quantity: 2 },
];
// claculate the total const
function getTotal(numbers) {
  let count = 0;
  for (const num of numbers) {
    let price = num.price * num.quantity;
    // console.log(price);
    count = price + count;
    // this formula for get the total value but here wiht counting we have to do it...
  }
  //   console.log(count);
  return count;
}
const total = getTotal(products);
console.log("total price is ", total);
