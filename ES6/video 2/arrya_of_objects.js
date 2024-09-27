const products = [
  { id: 1, name: `laq`, price: 65000 },
  { id: 2, name: `hp`, price: 60000 },
  { id: 3, name: `dell`, price: 45000 },
  { id: 4, name: `mac`, price: 165000 },
];

// suppose you want names:
const names = products.map((p) => p.name);
const price = products.map((p) => p.price);
console.log(names, price);

// filter those whose prices are gratter than 60000
const vlaue = products.filter((p) => p.price > 60000);
console.log(vlaue);

// find the product whose price is lessthan 50000
const chepest = products.find((p) => p.price < 50000);
console.log(chepest);

// get the total cost to buy all laptops:
const total = products.reduce(
  (previous, current) => previous + current.price,
  0
);

console.log(total);
