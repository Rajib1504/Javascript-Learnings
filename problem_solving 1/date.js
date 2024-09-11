// today date

const today = Date();
console.log(today);
const tday = new Date();
console.log(tday);

// get the month
const month = new Date("2067-10-19");
console.log(month.getMonth());
console.log(month.getDate());
month.setMonth(8); // we can change the value of month in this way
console.log(month.getMonth());
console.log(month.toLocaleString("en-GB"));

// doing it in secound
// if you want to calculate the secound
// unix epoc----
