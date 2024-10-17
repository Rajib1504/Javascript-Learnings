// scopeing:
// 1.function scope : variabel which is declear inside the function.which variable is dicleard inside the function, you can't get that value out side of the function most of the cases
console.log(print()); //global scope
// console.log(blockP()); //block scope of function form line 20
// console.log(vprint()); // I said it will give the error
// 2.block scope: when suppose you have done some work (declear variable)  inside the if,else of in some function block so that varaible can't come outside of if. if you will ask it out side of if then you will get the error. its call block.

// 3.var is global scope its doing hosting mean its taking the value to the top dosen't matter where you have delcear it.

// details of hosting:
for (var i = 0; i < 5; i++) {
  console.log(i); // inside here we will get the value and
}
console.log("outside", i); // here we will also get some value where in let or in const we are getting erro when we delclearin it out of the scope.

function print() {
  console.log("global", 5);
}
//function is a global scope if we will ask it from 1 line you will get the vlaue there
const blockP = function blockPrint() {
  console.log("block function", 20);
};
// function is a global scope but when you set it inside the const variable or inside let variable its imediatly become a block scope. if you will call the function before declearation it will give error

var vprint = function blockPrint() {
  console.log("block function", 20);
};
// if you think that by var if you will declear then you will get it in global so you are wrong because I forget to tell  var is only taking the variabel part  mean("var vprint") but this is not a function so it will give the error
