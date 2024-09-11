// inside a array how many boolean values are there count it and then return it.

function booleanCheck(arr) {
  if (!Array.isArray(arr)) {
    return "provide a valide array values";
  }
  let count = 0;
  for (a of arr) {
    if (a === Boolean) {
      count += a;
      console.log(count);
    }
  }
  //   return count;
}
const ax = [true, 32, 32, 54, false, true];
const x = booleanCheck(ax);
console.log(x);
