// string .................
let me ="Rajib Sardar";
let address = "sriDhamMayapur,741313,nabadwip,Nadia";
console.log(me);
console.log(address);

// string length ..........
me= "kaju badam";
console.log(me);
console.log(me.length);
// string is Immutable ..........
console.log(me[3]);
console.log(me);
 me [2] = "k";// here we try to change the value of index 2
console.log(me);// as we can see its not changed...

// array's are mutuble ( mean you can change the array value by its index) 
const roll = [ 13,70,24,52,54,33,56];
console.log(roll[3]);
console.log(roll);
roll [3] = 100;
console.log(roll);


// str to lower case ...........
console.log(me.toLowerCase());// dont for get to give the brackets open and close.

// str to toUpperCase ............
console.log(me.toUpperCase());// dont for get to give the brackets open and close.


let sub = "Math";
let book = "math";
// only one problem that the math m is in coapital once and another one is small
if(sub.toLowerCase() === book.toLowerCase()){
    console.log("i will do good result on my exam");
}else{
    console.log("Bari giye onno book niye aii")
};
// string slice method .................

let sl = "This is the details of slice.";
console.log(sl);
let slice = sl.slice(4, 9);// this is with the ended value. you can aslo do it without declearing the ended vlaue.
// let slice = sl.slice(4,); 
console.log(slice); 

// split ............
// split is used to shaparate the string or number on array 
// *split is not changing the oreginal variable its creating a new variable. 
let st = "I Love Javascript";
let nst= st.split(" ");
console.log(st);
console.log(nst);

// shaparation by using latter 
let str12 = "I Love My programing hero class and i'm so much interest to get top skills";
console.log(str12);
console.log(str12.split("o"));// here we shaparate by "o" and get it as an array;

// join .............
// we can join the array by the join method 
const str3 = ["I ", "love ", "the" ,"progromaing","hero class"]
// console.log(str3.join(","));
console.log(str3.join("-"));
// console.log(str3.join(""));// we can join by any thing how we want

// concat ......
// concatination for get it connect 
let a = "raj";
let b = "rakesh";
const ab = a + b;// this is one way to get concat.
console.log(ab);

const aB = a.concat(b);
console.log(aB);
// if you want gap 
let Ab = a + " " + b;
console.log(Ab);

// revarse by using the for loop of  
{let revarse = "";
let sentance = "I love javascript";
for(let latter of sentance){
    // console.log(latter);
    revarse = latter + revarse;
}
console.log(revarse);
}
// revarse by using the for loop 
{
    let rev = "";
    let sentance = "I love javascript";
for(let latter = 0; latter < sentance.length; latter ++){
    console.log(latter,sentance[latter]);
// rev = sentance[latter] + rev;// you can do like this or there is anoter option too\
let revLatt= sentance[latter];
rev = revLatt + rev;
}
console.log(rev)
} 
    // shortcut  ......
{
    let sentance = "I love javascript";
const rev = sentance.split('').reverse().join(" ");
console.log(rev);
}