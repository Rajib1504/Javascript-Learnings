// let x = 10;
// let method = Math.sqrt(x);
// console.log(method);


/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/


// console.log(method % 1);
for(let i = 0; i <=100; i++){
    let method = Math.sqrt(i);
 if(i > 2){
    if(method % 1 !== 0){
        console.log("this is not a square number",i); 
    }
 }
 if(i >= 8){
    if(method % 1 === 0){
        console.log("founded", i);
        break;
    }
 }
}

// suppose in question we get print those number which is not a sqare number start it after 1 and go till the next square number print all the numbers which is giving us the value not 0 after devidable with 1

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
for(let i = 0; i <=100; i++){
    let method = Math.sqrt(i);
    // console.log(method);
    if(i >=10){
        if(method % 1 === 0){
       console.log(i);
        }
    }
}
//again  practice
for(let i = 0; i <=100; i++){
    if (i > 4){
        if (Math.sqrt(i) % 1 === 0){
            console.log(i);
        }
    }
}