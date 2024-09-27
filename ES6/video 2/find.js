// find: find is almost same like filter just deffirence is find giving only the fist one who full filling the citeria. if not find then will give the value undefined.
const players = [89, 34, 56, 76, 86, 54, 76];
const find = players.find((p) => p > 50); // return only the first element who is grater than 50.
console.log(find);

const find2 = players.find((p) => p > 90); // didn't find anyone that's why return the value undefined.
console.log(find2);
