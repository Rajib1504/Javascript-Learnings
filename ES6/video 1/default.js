function add(n1, n2 = 0, n3) {
  const result = n1 + n2;
  console.log(n1, n2, result);
  return result;
}
// add(4, 9);goodBoy
// add(9);soitan polapan 2ta value er jaigai 1 ta di6y
// 1.where the parameter is asking for 2 value but we are providing the only one vlaue so the error is "undefined" because the value is not defined.
// 2. next error is NaN because 5 + undefined = NaN if no value is povided so no any clculation because no value is defined
add(3);
// result : undefined undefined NaN
// we can set here some default vlaue, this vlaue will work when in some parameter vlaue will be undefined. way of use for numbers{parameter = 0 /1 } for string {parameter = ''}
function fullName(first, last = " ") {
  const fullName = first + " " + last;
  console.log(fullName);
}
fullName("king");
// result: king undefined
// result with default (=""): king

// default vlaue sets for various types of data types:
const number = (p = "0"); //for sum
const numbers = (p = "1"); // for multipy
const string = (p = "");
const array = (p = []);
const object = (p = {});
const boolean = (p = true / false);
