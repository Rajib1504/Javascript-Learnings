
// Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
const even = [];
for(let i = 1; i <=40; i++){
    if (i % 2 === 0){
        even.push(i);
        // console.log("these are the even numbers in this segment from 1 to 40",i);
    }
}
console.log(even);
