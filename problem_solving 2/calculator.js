// creat a calculator:
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}
function devide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operation) {
  if (operation == add) {
    const result = add(num1, num2);
    return result;
  } else if (operation == subtract) {
    const result = subtract(num1, num2);
    return result;
  } else if (operation == multiply) {
    const result = multiply(num1, num2);
    return result;
  } else if (operation == devide) {
    const result = devide(num1, num2);
    return result;
  } else {
    return "please provide only,'add','substract','multiply','devide' ";
  }
}
const value = calculator(5, 3, multiply);
console.log(value);
