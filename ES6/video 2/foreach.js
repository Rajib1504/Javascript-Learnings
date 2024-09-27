const number = [1, 5, 3, 6, 32];

const result = number.forEach((n) => console.log(n)); // showing because in function we ask to show
console.log(result);

const dontshow = number.forEach((n) => n + 2);
console.log(dontshow); //undefined
