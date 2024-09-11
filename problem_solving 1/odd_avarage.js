/**
 * function takes an array as parameter
 * give me the avarage of the odd numbers in the array
 */
function avarageOdd(number) {
  // console.log(number);
  let odd = [];
  let sum = 0;
  for (const n of number) {
    // console.log(n); //till here we iterate over the numbers one by one to find out the odd numbers
    if (n % 2 === 1) {
      odd.push(n);
      //   console.log(odd); // till here we got the odd values inside the odd array.
    }
  }
  for (const i of odd) {
    // console.log("the number ", i);
    sum += i;
  }
  console.log("the total of the odd number is ", sum);
  const avrg = sum / odd.length;
  return avrg;
}

const num = [23, 45, 75, 86, 24, 72, 61, 83, 89];
const avg = avarageOdd(num);
console.log(Math.ceil(avg));

// next one same types question now do the avarage of the all even numbers
function avgEven(number) {
  let even = [];
  let sums = 0;
  for (num of number) {
    // console.log(num);
    if (num % 2 === 0) {
      //   console.log(num);
      even.push(num);
    }
  }
  //   console.log(even);
  for (n of even) {
    sums += n;
  }
  console.log(sums);
  const avgOfEvens = sums / even.length;
  return avgOfEvens;
}
const evenNum = [33, 43, 54, 67, 52, 94, 32, 68, 32, 98, 102];
const avgsEven = avgEven(evenNum);
console.log(avgsEven);
