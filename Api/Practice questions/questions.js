/*1. write a function that displays a maessage after 5s.
 */
// console.log("can you see mes");
let display = 0;

const massage = setInterval(() => {
  if (display < 5) {
    console.log("do the work more and more");
  }
  display++;
}, 2000);

let number = 0;
const numberStop = setInterval(() => {
  if (number > 10) {
    clearInterval(numberStop);
  }
  console.log("print me");
  number++;
}, 2000);

/* 
2.write a function called delayedGreeting() that takes two parameters, name and delay time, and logs a greeting message after the given delay time.
input: delayGreeting (`Alice`,2000)
output: hello,Alice! 
*/
const delayedGreeting = (name, delayTime) => {
  const delay = delayTime;
  const names = name;
  setTimeout(() => {
    console.log(`Good Morning ${names}`);
  }, delay);
};
delayedGreeting(`Rahul`, 2000);
// 3.The function tellJoke() below logs a funny message ever 2 seconds and after 10 seconds,it stops. Complete the code
let joke = 0;
const printJokes = setInterval(() => {
  console.log(`Why don’t skeletons fight each other?

  Because they don’t have the guts! `);
  if (joke >= 9) {
    clearInterval(printJokes);
  }
  joke++;
}, 1000);
printJokes();

// 4.Write an async/await function that fetch data from an api and logs a message:
// input: api link
const massageLoad = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  for (const item of data) {
    console.log(`The name is ${item.name}`);
  }
};
massageLoad();
