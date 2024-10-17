console.log("print-1");
// console.log("print-2");
const timeout = setTimeout(() => {
  console.log("display 2");
  clearTimeout(timeout); //for clear time out
}, 2000);
console.log("print-3");
console.log("print-4");
console.log("print-5");
console.log("print-6");
// setInterval: is almost same but not full as settimeout
// setInterval will repeat till that time when you are not stoping him manually.
let count = 0;
const intervaId = setInterval(() => {
  count++;
  if (count > 10) {
    clearInterval(intervaId);
  }
  console.log("count-", count);
}, 2000);
// for stop you can you need to set it in a variable
//   console.log("print-7");
//   clearInterval(intervaId);you can stop in in this way or can use the condetion
