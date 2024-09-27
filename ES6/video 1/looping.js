const numbers = [1, 4, 5, 6];
// for of loop: for arry and for string.
for (const number of numbers) {
  console.log(number);
}
const nobab = "siraj ud Doula";
for (const char of nobab) {
  console.log(char);
}
// for in loop : for objects
const actor = {
  fullName: "anamika",
  age: 25,
  phone: 9017332158,
  color: "grey",
};
for (const key in actor) {
  //   console.log(key); // for get only the key
  const value = actor[key]; // for get the value we need to create a variable and then there obj name [key]
  console.log(key, value);
}
