/**
 * array has some duplicate elements
 *
 */
const theaf = [
  "raj",
  "deep",
  "sanjit",
  "pratap",
  "raj",
  "deep",
  "sanjit",
  "pratap",
];
// we declear some values which has some duplicate value of array.
const numbers = [21, 43, 53, 55, 667, 86, 21, 43, 53, 82];
//here we have done the same:

// The question is : No any duplication should be happnen in you array
function theafNoDuplicate(name) {
  console.log(name);
  const noDuplicate = [];
  for (n of name) {
    console.log(n);
    if (noDuplicate.includes(n) === false) {
      // this condetion is asking is inside the noDuplicate array there are any vlaue of theaf ? we are checking using the includes.
      noDuplicate.push(n);
      //   console.log(noDuplicate);
    }
  }
  return noDuplicate;
}

const names = theafNoDuplicate(theaf);
console.log("here is no any duplication ", names);

// now next task with the numbers
function noRept(number) {
  //   console.log(number);
  const noRept = [];
  for (n of number) {
    // console.log(n);
    if (noRept.includes(n) === false) {
      noRept.push(n);
    }
  }
  //   console.log(noRept);
  return noRept;
}

const num = noRept(numbers);
console.log("here the all arrays without the duplication", num);
