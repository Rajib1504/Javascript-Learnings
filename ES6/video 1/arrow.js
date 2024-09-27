// function delclaration:
function add(a, b) {
  // const total = a + b;
  // return total;
  return a + b;
}
const sum = add(10, 32);
console.log(sum);
// function expresion:
function add2(a, b) {
  return a + b;
}
// arrow function :
// const add3 = (parameters) => body
// 2 or more parameter
const add3 = (a, b) => a + b;
console.log(add3(2, 6));
const add4 = (a, b, x, e, te, t, y, ab) => a + b + x + e * te * t - y + ab;
const total = add4(10, 2, 3, 4, 6, 2, 9, 50);
console.log(total);
// for single parameter:
const getAge = (person) => person.age;
// object declearing:
const details = { name: "kanak", age: 19 };
// targeting:
const obj = getAge(details);
// show me:
console.log(obj);
// way 2: for single parameter
const single = (man) => man.name; // parameter will not have any bracket
const personName = single(details);
console.log(personName);
// without the parameter:
const getPi = () => Math.PI;
console.log(getPi);
// array function in big function:
const doMath = (x, y, z) => {
  let sum = x + y + z;
  let mul = sum * z;
  return mul; // here you need to write the return keyword by yourself
};
const math = doMath(2, 3, 5);
console.log(math);

// duplicate parameter name is not allowed in parameter.
const arrowFn = (a, a, a) => console.log(a);
