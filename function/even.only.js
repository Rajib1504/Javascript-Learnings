/**
 * create function that will return only the even numbers
 * return the sum of even numers
 */
function evenONly(numbers) {
  //   console.log(numbers);
  let evens = [];
  for (const num of numbers) {
    if (num % 2 === 0) {
      //   console.log(num);
      evens.push(num);
    }
  }
  return evens;
}
const numb = [20, 40, 51, 543, 74, 64, 30, 31, 97];
const eventotal = evenONly(numb);

console.log("even numbers are", eventotal);

// return the sum of even numers
function evenSum(numbers) {
  //   console.log(numbers);
  let sum = 0;
  let fullSum = [];
  for (const n of numbers) {
    // console.log(n);
    if (n % 2 === 0) {
      sum += n;
      fullSum.push(sum);
    }
  }
  //   console.log(fullSum);
  return fullSum; // need to check that its should be out of the loop.
}
const arr = [2, 4, 54, 75, 785, 86, 43, 674, 34];
const total = evenSum(arr);
console.log("the total of the even numbers is", total);
