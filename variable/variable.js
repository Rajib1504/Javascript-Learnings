console.log(123);
let wieght = 50;
let name = "rajib";
console.log(wieght);
wieght = 30;
console.log(wieght);
let fridge = 36000;
fridge = fridge + 500;
console.log(fridge);
fridge;
fridge += 1000; // this is the short cut way of the line 8 code.
console.log(fridge);

// multiply
let orrange = 30;
// you bought 5 pc of orrange
orrange *= 5;
console.log(orrange);

// joning of str and num
let first = "manu";
let num = 34;
let totals = first + num;
console.log(totals);

let applePrice = 300; //1kg price is this
let orrangePrice = 200; //1 kg price is this
// I want to buy 5 kg of apple and 2 kg of orange and I gave him total 2000 rs:
applePrice *= 5;
orrangePrice *= 2;
let total = applePrice + orrangePrice;
console.log("total price of my fruits is ", total);
let myMoney = 2000;
let returnable = myMoney - total;
console.log("you will give me back", returnable, "rs");

// avg marks calculation of these subject marks
let math = 75;
let biology = 25;
let chemistry = 65;
let physics = 80;
let bangla = 35;
let eng = 45;
let hist = 99;
let geo = 50;

let totlaMark =
  math + biology + chemistry + physics + bangla + eng + hist + geo; // creating a sum
console.log(totlaMark);

let average = totlaMark / 8;
console.log("this is the avarage of these subjects", average);

// remainder opening :
let n = 119;
let remainder = n % 5;
console.log(remainder, "this is the remainder of this  n");

// comparision:
console.log(5 > 10);
console.log(5 < 10);
console.log(5 == 10);
console.log(10 == 10);
console.log(10 != 10); //true
console.log(10 !== 10); //false
console.log(10 === 10);
console.log(10 === "10");
console.log(10 >= 10);
console.log(5 >= 10);
console.log(5 <= 10);
console.log(10 <= 10);
console.log(100 <= 10);

// condetion checking
let biriyani = 300;
if (biriyani < 200) {
  console.log("I will go for eat");
} else {
  console.log("I'm not interest for eat");
}

let price = 30;
if (price > 10) {
  console.log("I will go for eat");
} else {
  console.log("I'm not interest for eat");
}

// multiple condetion checking by using and
let salary = 3000;
let height = 67;
let education = 12;
//  and
if (salary > 5000 && height > 70 && education >= 11) {
  console.log("good chance to look forword");
} else {
  console.log("I'm not interest let move for new one");
}

let car = "alto";
let bike = "KTM";
let isBike = true;
// or
if (car == "Thar" || bike == "KTM") {
  console.log(" I would like to be you're girlfrind");
} else {
  console.log(
    "I will find for me another one boyfriend who will be capable for me"
  );
}
// ...........................................
// Complex condetion
// we want to say that if you have good salary and a bike then ok or you need to have a good car
if ((salary >= 35000 && isBike == true) || car == "balino") {
  console.log("yes i can accpt your proposal");
} else {
  console.log("vag sala aii kan theky");
}
if ((salary <= 35000 && isBike == true) || car == "balino") {
  console.log("yes i can accpt your proposal");
} else {
  console.log("vag sala aii kan theky");
}

// if else if :
// const  rate = 10000;
// const  rate = 5000;
const rate = 4000;
//  we want that if the price is more than 5000 then we will take 25 % discount on that price or if that price is 5000 then 10% discount if less then 5000 no discount.
if (rate > 5000) {
  const discount = (rate * 25) / 100;
  const amount = rate - discount;
  console.log("Sir this is your final price", amount);
} else if (rate == 5000) {
  const offer = (rate * 10) / 100;
  const t = rate - offer;
  console.log(" sir this is the price after doing the discount", t);
} else {
  console.log("so sorry there are no any discount for this price range");
}

// ......................
// Ternary
// condetion  ? do something when true : do something when false
let a = 18;
if (a >= 18) {
  console.log("you can vote");
} else {
  console.log("bari giye gumaw");
}

// Ternary
// condetion  ? do something when true : do something when false
a >= 18 ? console.log(" go for vote") : console.log("dudu kaw baba tumi");

var nums = 10;
if (nums > 5) {
  console.log("Greater than 15");
} else {
  console.log("flas3e");
}
