// math.max method:
const max = Math.max(20, 32, 5, 67, 98);
console.log(max);
// spread.js
const spread = [6, 45, 64, 7];
const maxvalue = Math.max(...spread); //... 3 dot to get the value of an array
console.log(maxvalue);
// using spread operator to copy
const friend = [2, 34, 54, 67];
const bondhu = friend;
// bondhu.push(20);
console.log(bondhu); // we have changed the value in bondhu but we will see the value has chnage infriend too becase of these are nonpremetive data types they are useing the same space in broser so if you're doing some change here in one variable it will change in all variables.
// console.log(friend);
// if you want that these copy should be only on your new valeu then you need to use spread operator before push the value
const dost = [...friend]; //copy
bondhu.push(30);
console.log(dost);
console.log(bondhu);
{
  const num = [20, 32, 44, 9, 4];
  const num2 = num;
  num2.push(50);
  const num3 = [...num, 90]; // this is the advance way to copy and push and more item
  console.log(num3);
  console.log(num2);
}
