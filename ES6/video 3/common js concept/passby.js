// passby:
let n1 = 2;
let n2 = 4;
function mulitple(a, b) {
  a = 10;
  const result = a * b;
  return result;
}
console.log(n1); //as we can see the value is not change which we has changed inside the  function.
const number = mulitple(n1, n2);
console.log(number);
// object and array are passby refference :
let student1 = { name: "jalil", partner: "borsha" };
let student2 = { name: "raj", partner: "anika" };

function makeMovie(student1, student2) {
  student1.name = "aditya";
  student2.partner = "koyel";
}
console.log(student1, student2);
// value has not change till I call the function.
makeMovie(student1, student2);
console.log(student1, student2);
// after calling the function the value has changed
