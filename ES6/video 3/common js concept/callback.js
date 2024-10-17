// callback function: we create a function which takes a function as a prameter and inside the main fnction we are asking the function with the value. explere for more

function greeting(person, name) {
  //   console.log(person);
  person(name);
}
// const name = "halim ka";//string
// const num = 90; //number
// const array = [20, 43, 34];
// // array;
// const laptop = { price: 40000, brand: "dell" };
// greeting(laptop);

// same we also can sent a function to the funtion as a parameter
function greetingHnadler(name) {
  console.log("good morning", name);
}
greeting(greetingHnadler, "tom hans"); // clling the function

// greeting(greetingHnadler(), "rakesh");calling the funcion
function greetEvening(name) {
  console.log("good evening", name);
}

greeting(greetEvening, "mikoyla");
function greetNight(name) {
  console.log("good night", name);
}

greeting(greetNight, "sukanta");
