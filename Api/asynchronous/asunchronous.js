console.log("print-1");
// console.log("print-2");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((responce) => responce.json())
  .then((data) => console.log(data));
console.log("print-3");
console.log("print-4");
console.log("print-5");
console.log("print-6");
// output:
// print-1
// async.js:6 print-3
// async.js:7 print-4
// async.js:8 print-5
// async.js:9 print-6
// async.js:5 Array(100)we delceare the fetch in 2nd but its print on last ? so it mean fetch is not same like console.log its littel deffirent.
console.log("print-1");
console.log("print-2");
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((responce) => responce.json())
//   .then((data) => console.log(data));
console.log("print-3");
// console.log("print-4");
setTimeout(() => {
  console.log("print-4 here from set time out");
});
console.log("print-5");
console.log("print-6");
// output:
// async.js:17 print-1
// async.js:18 print-2
// async.js:22 print-3
// async.js:27 print-5
// async.js:28 print-6
// async.js:25 print-4 here from set time out => we have set the value in the 4th position but why its coming in the last position .>..so that mean the settime out also not workin as normal.
console.log("display-1");
console.log("display-2");
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((responce) => responce.json())
//   .then((data) => console.log(data));
console.log("display-3");
// console.log("print-4");
setTimeout(() => {
  console.log("display-4 here from set time out");
}, 5000); // in time out we set 4000 melisecond so it will update after 4 second
console.log("display-5");
console.log("display-6");
