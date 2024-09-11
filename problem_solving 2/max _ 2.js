// teacher said who will get the top score to him or to her i will give a stoberry.

// using the condetion
let dip = 30;
let shyam = 29;

if (dip > shyam) {
  console.log("you're eligible for strawberry", dip);
} else {
  console.log("you win come here", shyam);
}

// using the function
function maxValue(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
const a = maxValue(80, 68);
console.log(a);

// way - 3
const max = Math.max(32, 53, 35);
console.log(max);

// utilizing the function
const max1 = maxValue(32, 45);
console.log(max1);
const max2 = maxValue(53, 33);
console.log(max2);
const ultimateMax = maxValue(max1, max2);
console.log(ultimateMax);
