// Map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the results from each opertion in an array and finally returns you the array

const numbers = [2, 4, 7, 9, 10];
// dubble it:
function dubble(num) {
  //   console.log(num);
  return num * 2;
} // here we use normal functions

//first we will do by using the normal function then will look at
const result1 = numbers.map(dubble);
// console.log(result1);
//................................
// arrow function:
const dubleme = (n) => n * 2;

const result2 = numbers.map(dubleme);
// console.log(result2);

// next method:
const result3 = numbers.map((n) => n * 2);
// console.log(result3);
// do sum:
const doSum = [2, 4, 7, 9, 10];
const sum = doSum.map((n) => n + 5);
// console.log(sum);

// do half :
const half = [20, 42, 50, 22, 42];
const dohalf = half.map((n) => n / 2);
// console.log(dohalf);

// taking the length of each string form array:
const friends = ["abidul", "kiron", "sinu", "sumon", "sraboni"];
const length = friends.map((friend) => friend.length);
// console.log(length).;

// first later
const frnd = friends.map((fr) => fr[0]);
console.log(frnd);
