const min = [10000, 12000, 20000, 15000, 29000, 50000, 8099];
// get the minimum value
function minValue(array) {
  let lowvalue = array[0];
  for (const a of array) {
    if (a < lowvalue) {
      lowvalue = a;
    }
  }
  return lowvalue;
}
const lowest = minValue(min);
console.log(lowest);
