// alows use === not ==
// equal comparison doesn't work for non-primitive
// const first = 2;
const first = "2";
const second = 2;
if (first == second) {
  console.log("value is equal");
} // its showing that its equal

if (first === second) {
  console.log("is qual");
} else {
  console.log("not equal");
} // its showing not equal

// type coercion in equal
// type conversion in equal

// note:2 empty array or 2 empty object is not equal because its indeffirent refference if you will set the first variable name in second variable value then it will be equal otherwise not
