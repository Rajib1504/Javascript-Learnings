/***
the question is if your burger cost is mere than 500 then you can get a coke in free, if your burger price is 500 the you need to pay 5% of the coke price or if your burger is more chepper then you need to pay full money of the coke:


Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
{
// let burger = 300;
// let burger = 500;
let burger = 600;
if (burger>500){
    let offer = "coke free";
    console.log("here is your order Burger with a free coke");
}
else if(burger==500){
    let coke = 30;
    let offer_2= 30*5 /100 ;
    let offerCoke = coke -= offer_2;
    console.log(offer_2);
    let offerBurger = burger += offerCoke;
    console.log("you can take coke in total",offerBurger) ;
}
else{
    let coke = 30;
    console.log("you wnat to get a coke you need to pay",burger + coke)
};
}
// question one is done 

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
{

let weight = 58;
let height = 1.75;
let bmi = weight / (height **2);
console.log(bmi,"this is your bmi score");

// let BMI = 39;
// let BMI = 29;
// let BMI = 19;
let BMI = 16;
if (BMI <18.5){
    console.log("you are under weight");
}else if(BMI >=18.5 && BMI<= 24.9){
    console.log("you are normal");
}else if (BMI >= 25 && BMI <= 29.9){
    console.log("you are over weight");
}else{
    console.log("you're abese");
}
// secound answer is done 

}

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
{
let score = 90;
if (score >=90 && score <=100){
    console.log(score,"your grade is AA");
}else if(score>=80 && score <=89){
    console.log(score, "your grade is A");
}else if(score >= 70 && score<=79){
    console.log(score,"your grade is B");
}else if(score >=60 && score <= 69){
    console.log(score,"your score is C")
}else {
    console.log("go and read again and do the prepration for next year")
}

}
// third answer is also done 


/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
{
let myScore = 80;
// let myScore = 40;
// let friendScore = 80;
// let friendScore = 70;
// let friendScore = 40;
let friendScore = 30;
if(myScore == 80){
    if(friendScore >= 80){
        console.log("Let's go for lunch");
    }else if (friendScore < 80 && friendScore > 60){
        console.log("good luch for the next time");
    }else if (friendScore < 60  && friendScore >= 40){
        console.log("keep your friend's massage unseen.")
    }else{
        console.log("block your friend")
    }
} else{
    console.log("got to home and sleep and act sad")
};
}
// next question 
/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
{
// let num1 = 79;
let num1 = 49;
let num2 = 59;
let results;
// if (num1 > num2){
//     results = (num1**2);
//     console.log(results,"this result you get because num1 is bigger then num2");
// }else{
//     results = (num1 + num2);
//     console.log(results, " you get this value because num1 is not bigger then num2");
// }
 num1 > num2 ? console.log(num1**2) :console.log(num1 + num2);
}
//  next question 
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


// let age = 8;
// let age = 20;
// let age = 70;
let age = 40;
// let isStudent = true;
let isStudent = false;
let isSeniour = false;
// let isSeniour = true;
let ticket = 800;


if(age < 10){
console.log("ticket free");
}else if(isStudent) {
let discount = (ticket *50) / 100;
console.log(ticket - discount, "this the price for student");
}else if( age >= 60 || isSeniour){
    discount = (800 *15) /100;
    console.log(ticket - discount,"this price for seniour citizens only");
}else {
    console.log("price",ticket);
}


// ................Array Practice................
// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array
{
const fruits = ["mango", "watermalon","apple","orange","dragon fruit"];
console.log(fruits[3]);
fruits.splice(3 , 0 ,"jamburay");
console.log(fruits);
}

// next question 
// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output
{
const touristPlace = ["swizerland", "monako","europe"];
touristPlace.push("japan");
console.log(touristPlace);
touristPlace.splice(2, 0 ,"koria","Indonesia");
console.log(touristPlace);
touristPlace.pop();
console.log(touristPlace);
}
// // next question 
// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.
{
const books =["how to talk","pshycology of money","how to win friends and the influence people","the art of laziness" ];
let search = books.includes("javascript book");
console.log(books);
console.log(search);
}
// // next question 
// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.
{
    let a = ["a","b","c","d"];
let num = 32;
let names = "rita";
console.log(Array.isArray(a));
console.log(Array.isArray(num));
console.log(Array.isArray(names));
}
// // next question 
// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().
{let str1 = "hello";
let str2 = "world";
console.log(str1.concat( str2));
}

// loop practices 
/* 
1. rite a loop 1 to 200. Use break to exit the loop once you find 100.
*/
{
    for(let i = 0; i <= 200; i++){
if( i >= 100){
    break;
}
console.log(i);
    }
}
console.log("next question ");
/* 
2. Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
{
let num = 0;
let sum = 0;
while(num <100){
    sum +=num;
    if(sum > 100){
        break;
    }
num++;
console.log(num);
}
console.log(sum)
}

console.log("next question");

/* 
3. Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
// for (let i = 0; i < 100 ;i++) {
// if( i % 1 == 0){
//     console.log("this is the first squar numbr",i);
// }
// }


/* 
4.Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
