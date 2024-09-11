const jim = 50;
const kim = 97;
const mim = 39;
if (jim > kim && jim > mim) {
  console.log("jim is the ulitmate boss", jim);
} else if (kim > jim && kim > mim) {
  console.log("kim is the ultimate boss", kim);
} else {
  console.log("mim is the bigboss", mim);
}

// way-2
function maxOfThree(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else {
    return n3;
  }
}
console.log(maxOfThree(32, 59, 80));

// way -3
const max = Math.max(32, 43, 56, 76, 43, 54, 30);
console.log(max);
