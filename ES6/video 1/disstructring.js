const actor = {
  fullName: "anamika",
  age: 25,
  phone: 9017332158,
  color: "grey",
};
// if you want to get the vlaue of fullName 5 times so how you will use
// 1.console.log(actor.fullName);*5 times you will write it.
// 2;const names = actor.fullName;
3;
// const { fullName } = actor;//for name
// const { fullName, age } = actor; // in this way using commas we can use multiple key and get the values
// even we can chage the key name in this method
const { phone: mobile, color, age, fullName } = actor;

console.log(fullName);
console.log(fullName);
console.log(fullName);
console.log(fullName);
console.log(fullName);
console.log(fullName);
console.log(age);
console.log(age);
console.log(age);
console.log(color);
// console.log(phone);// here its says phone is not defined becase we have change the key name form phone to mobile
console.log(mobile);

// Array  Disstructuring
const number = [12, 43];
const [x, y] = number; //array is conting as an index so x prefer to index 0  y is in 1
console.log(x);
console.log(y);

// advance concept:
function dubbleThem(a, b) {
  return [a * 2, b * 2];
}
const [prothom, ditiyo] = dubbleThem(2, 4);
console.log(prothom, ditiyo);
// in disstructrue if you want to skip some value then you can ,, use 2 comma
