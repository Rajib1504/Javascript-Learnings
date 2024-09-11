/**Objective: write a function to give me the sum of all numbers in an array
 * 
 * step-by-step explaiton how to do it:
1.decleare a function,
2.call check whether the funciton is called properly,
3.set a parameter(s),
4.pass the parameter(s),check whether parameter is passed or not. 
5.do the function tasks (go one by one ,step by step)
*/
function sumOfNum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    console.log("sum =", sum);
    const total = sum;
  }
}
sumOfNum([2, 3, 4, 8, 3, 6]);

// one more time
function doSum(arr) {
  console.log(arr);
  let sum = 0;
  for (const a of arr) {
    // console.log("value of a", a);
    sum += a;
  }
  return sum;
}
const numbs = [2, 5, 8, 13, 15];
const total = doSum(numbs);
console.log("the total value of the the array is", total); // if you did not render the return the it will show you undefined or if after the return you will not give anything mean any value then also you will get the value undefined.

/**Objective: write a function to give me the sum of all numbers in an array*/

function calcultSum(numbers) {
  console.log(numbers);
  let sum = 0;
  for (const num of numbers) {
    // console.log(num);
    sum += num;
  }
  return sum;
}
const ar = [3, 4, 5, 8, 2, 8];
const valueSum = [calcultSum(ar)];
console.log("the total value of the array is ", valueSum);
