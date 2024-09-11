/***
Subtask-1:
Find all the odd numbers from 61 to 100.
 */

/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */
let odd = [];
let even = [];
for (let i = 61; i < 100; i++) {
  if (i % 2 !== 0) {
    odd.push(i);
    console.log("I'm Odd", odd);
  }
  if (i >= 78 && i % 2 === 0) {
    even.push(i);
  }
}
console.log("I'm the even after 78 till 100", even);
