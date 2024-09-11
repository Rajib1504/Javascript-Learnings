// looping  techniques
// 1.for loop
// 2. while loop
// 3.do while loop => ignore
// 4.for of loop => used for array 
// 5. for in loop => used for objects 

// array by using the for of  loop 
const friends= ["elon", "bill", "waren","mark"];
for(const friend of friends){
    console.log(friends , friend);
}
// getting array by using the for loop 
for(let i = 0; i >friends.length;i++){
 
    console.log(friends[i]);
}

// gettings array by using the while loop 
const n = [23,534,535,65,79,58,96,405,54,23,64,34];
let i = 0;
while(i < n.length){
    console.log(n[i]);
    i++;
}

// reverse method.........
const rev = n.reverse();
console.log(rev);

// Doing reverse by using the unshift method  by for of loop
const num = [1,2,3,4,5,6,7,8];
const rev_num = [] ;
for(let no of num){

rev_num.unshift(no);
console.log(no);
}
console.log(rev_num);

// doing reverse by using the for loop 
let revr_se = [];// we have creat variable with the empty array for reverse.
for(let i = 0; i < num.length; i++){
    console.log(num[i]);//this is the normal way to get the normal value 
    // if we need the value in revarse so the way is :
revr_se.unshift(i);// here we declear the undeclear value with the unshift method and include the loop iteration variable.

}
console.log(revr_se);

// there are also another way to get the reverse value by creating a reverse loop.
let re = [];// if you want to stroe it in array then creat a empty arry variable then push that value there.
for (let i = num.length-1; i >= 0; i--){
    console.log(num[i]);
    re.push(num[i]);
    console.log(re);
}

// practice of the reverse of array by using the for of loop then by using the for loop then by using the while loop then also by using the reverse loop 
{
    const players = ["Rik","Rohit","Rajesh","Amit","Aniket","Sangita"];
    //using the for of loop
let r = [];
for(let pl of players){
    console.log(pl);
    r.unshift(pl);
}
console.log(r);
// using the for loop 
let rs = [];
for (let i = 0; i <players.length; i++){
    console.log(players[i]);
    rs.unshift(players[i]);
}
console.log(rs);
// using while loop 
let revrs = [];
let i = 0;
while(i <players.length){
    console.log(players[i]);
    i++;
    revrs.unshift(players[i]);
    console.log(revrs);
}//check it  some thing wrong

// reverse array 
const revers = [];
for (let i = players.length-1; i >=0;i--){
    console.log(players[i]);
    revers.push(players[i]);
}
console.log(revers);

// short ....................check on googkle and try to understand





}