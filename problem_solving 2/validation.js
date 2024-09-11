function multiply(num1, num2) {
  // condetion for checking the vlaue
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "please provide a vlaid number";
  }
  const mult = num1 * num2;
  return mult;
}
const result = multiply(2, 9);
// const result = multiply(2, "9");NaN
// const result = multiply(2, "nine");NaN
// const result = multiply(5 * 7);
NaN;
// const result = multiply(5 + 2, 4 * 3); // if value is deffirenceated by comma then its okay. otherwise error will come
console.log(result);

function fullName(first, last) {
  if (typeof first !== "string" || typeof last !== "string") {
    return "provide a string";
  }
  const fName = first + " " + last;
  return fName;
}
const names = fullName("Raj", "kumar");
console.log(names);

function getPrice(product) {
  console.log(typeof product); // we find the type of product is obj so we can do the condetion check .
  if (typeof product !== "object") {
    return "invalid object";
  }
  const price = product.price;
  return price;
}
const price = getPrice({ name: "chulkani dandi", price: 35, color: "blue" });
// const price = getPrice(34); // undefined
console.log(price);

// validation check on the Array
function getSecond(number) {
  //{ console.log(typeof number); // for array its also give the value object.
  console.log(Array.isArray(number)); // we have to check the type of array in this method then will give the value true if it will be array so . }

  if (Array.isArray(number) === false) {
    return "invalid array";
  }

  const second = number[1];
  return second;
  //   console.log(second);
}
const num = [2, 43, 5, 54, 3];
// const num = 40;
const sec = getSecond(num);
console.log(sec);
