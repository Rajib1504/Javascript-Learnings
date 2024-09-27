const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};
console.log(glass);
// key
const keys = Object.keys(glass);
console.log(keys);
// value getting :
const value = Object.values(glass);
console.log(value);
// pair of key and value:
// const pair = Object.entries(glass);
// console.log(pair);
// result:
[
  ["name", "glass"],
  ["color", "golden"],
  ["price", 12],
  ["isCleaned", true],
];
//     this result is array of array or 2 dimentional array

// delete :
// delete glass.isCleaned;
// console.log(glass);

// delete with distraction:
// const { isCleaned, ...shortGlass } = glass;
// console.log(shortGlass);

// freeze: is used to freeze and object it will not take any  value and not give or delete anything .
// Object.freeze(glass); // source is not added
// Object.freeze(glass); // source is added
glass.source = "india";
delete glass.name;
glass.price = 8000;
console.log(glass);

// seal:glass.source = "india";
Object.seal(glass); //seal is to update value only
delete glass.name;
glass.price = 8000;
console.log(glass);
