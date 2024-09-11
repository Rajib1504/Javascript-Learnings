// for do the value alternate between eachother we need to take some one help .
let a = 4;
let b = 3;
// we want that a =3 and b = 4 should be happen .
// a = b;
// b = a;
// console.log(a, b); // value is coming 3 3 so this is not working.

// so we can do these various way:

// way -1
const c = a;
a = b;
b = c;
console.log(a, b);
