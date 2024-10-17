// arguments:

function sum(a, b, c) {
  console.log(arguments); // here we can see all of my arguments in the form of array like object we can iterate but cant to push
  const arr = [...arguments];
  console.log(arr);
  const result = a + b + c;
  return result;
}
const total = sum(20, 40, 32, 43, 534, 54, 43, 34); // here we declear more arguments then needed
console.log(total);
console.log(sum.length); // by this way we can check the length of our parameter
