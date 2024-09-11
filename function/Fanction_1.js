// const number = 45;
function fanOffKor() {
  console.log("bosa theky uthe dara");
  console.log("walk towards the switch");
  console.log("click the switch to off the fan");
}
fanOffKor();

// function name(){

// }
function brushTeeth() {
  console.log("pick up the brush");
  console.log("add paste");

  console.log("2 min goso and goso and fena felo");
}
brushTeeth();
{
  //function Parameter:
  // single input in parameter
  function samosa(x) {
    console.log("samosar dam holo", x, "taka");
  }
  samosa(10);

  // using function to get the squre value

  function squre(a) {
    const result = a * a;
    console.log("the squre of", a, "is", result);
  }
  squre(2);
  squre(6);
  squre(22);
}
{
  // dubble input in parameter
  function num(a, b) {
    let sum = a + b;
    console.log("the sum of", a, b, "is", sum);
  }
  num(473, 964);
  num(12, 32);

  //multiple parameter exemple:
  function addAll(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log("if you put all value then the result is ", total);
  }
  addAll(12, 32, 4, 12, 32);
  addAll(12, 5, 3, 5); //we have not give him all the values so some problem will be in this case-- its showing us NaN( not a number);
}

{
  function dubbleIt(number) {
    const dubble = number * 2;
    console.log(number, dubble);
  }
  console.log("lets call the function");
  dubbleIt(12);
  console.log("lets call the function");
  dubbleIt(32);
  console.log("lets call the function");
  dubbleIt(71);
  console.log("lets call the");
  // we can also decleare a variable not only a vlues
  const num = 54;
  dubbleIt(num);
}
{
  // declearing the values in the form of arguments
  function difference(a, b) {
    let deff = a - b;
    console.log(a, b, "difference is", deff);
  }
  const fatherAge = 60;
  const myAge = 23;
  difference(fatherAge, myAge);
  console.log("next one exemple of the value argument");
  const myMarks = 80;
  const friendMarks = 60;
  difference(myMarks, friendMarks);
}

{
  // Return
  function money(number) {
    const dubble = number + number;
    return dubble; //after return no any code is working because after returning the value its leaving the code then going to the next code.
  }
  //money(10);
  // we get the value in return but we can't to use it...

  // so if we want to use it then we need to save it in one variabel then we can do work with that
  const oldMoney = money(5); // we save it in a variable
  console.log(oldMoney); // we print that variable

  {
    // another one exemple of return

    function price(num1, num2) {
      const total = num1 + num2;
      return total;
    }
    const bill = price(290, 800);
    console.log(bill);
  }
}
{
  // There are also another way to do the value return:
  function add(n1, n2) {
    return n1 + n2;
  }
  const check = add(10, 5);
  console.log(check);
}
{
  // return with multiple actions
  function doMath(x, y) {
    const sum = x + y;
    const diff = sum - y; // here we use the sum.
    const mul = diff * x; // we use multiply with diff.
    const result = mul / 2;
    // return result;
    return mul;
  }
  const res = doMath(5, 10);
  console.log(res);
}
{
  // condetional return:
  function isEven(num) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isEven(110));
  console.log(isEven(85));

  // more short way to do it
  function isOdd(x) {
    if (x % 2 === 1) {
      return true;
    }
    return false;
  }
  console.log(isOdd(32));
  console.log(isOdd(57));
}
{
  // for a given string tell me whether it has even number of characters or not

  function evenSizeString(str) {
    const length = str.length; // we get the length value of the str
    console.log(str, length);
    if (length % 2 === 0) {
      console.log("even size");
      return true; // becasue we want to find the even
    } else {
      console.log("odd size");
      return false; // because we want to find the even
    }
  }
  const y = evenSizeString("Dhaka");
  const x = evenSizeString("Bangladesh");
  console.log(y);
  console.log(x);
}
{
  // function using the boolean parameters
  // the question is if the result will give the boolean value true then will do some action if flase the some another action
  function dubbleOrTriple(marks, pass) {
    if (pass === true || marks > 30) {
      const result = marks * 2;
      return result;
    } else {
      const result = marks * 3;
      return result;
    }
  }
  console.log(dubbleOrTriple(30, true));
  console.log(dubbleOrTriple(25, false));
}

// {
//   // function over array:
//   function getNum(arr) {
//     // console.log(arr);
//     const lngth = arr.length;
//     return length;
//   }
//   getNum([23, 43, 99, 44, 674, 46, 756, 34]);
// }
{
  // function over the object
  function getAge(person) {
    const age = person.age;
    return age;
  }
  const person = {
    name: "sribash",
    age: 32,
    job: true,
    salary: 40000,
  };
  console.log(getAge(person));
}
