// you have friend with deffirent height you need to find the tallest friend. how you will find him .
const friend = [60, 65, 73, 79, 81, 50, 59];
// 1.need to iterate over the array
function tallestFriend(num) {
  //   console.log(num);
  // let max = n;// here n is not decleard so, we want to iterate from start value so then we can declear the index 0
  let max = num[0];
  for (const n of num) {
    // console.log(n);
    //   let max = n;// if we will add this let here then it will change every time so we will declear it above the loop for everytime
    if (n > max) {
      max = n;
      //   console.log(max);
    }
  }
  return max;
  //   console.log(max);
}
const numbers = tallestFriend(friend);
console.log(numbers);

// part - 2;

// function to check the smallest number:

function smallest(number) {
  //   console.log(number);
  let topSmall = number[0];
  for (const n of number) {
    if (n < topSmall) {
      topSmall = n;
    }
  }
  return topSmall;
}
const small = smallest(friend);
console.log(small);
