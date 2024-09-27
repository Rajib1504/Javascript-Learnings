// filter: filter selects elements based on a condetion and returns an array with the elements that fulfilled the condetion.
const players = [89, 34, 56, 76, 86, 54, 76];
const selected = players.filter((p) => p > 50); // filter the array who id gratter than  50 so return me
console.log(selected);
const select = players.filter((p) => p > 90); // empty array because no any value fulfill the lavel.dd
console.log(select);
