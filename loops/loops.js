// for loop .............
const number = [1,4,5,7,8,9,10];
for(n of number ){
    console.log(n);
}
// ...while loop...........

let no = 1;
while( no < 10 ){
    console.log("no -",no);
    no++;
}
// sum ....................
let sum = 0;
let count = 1;
while (count <20 ){
    sum = sum + count;
    console.log("sum =",sum);
    count++;
};
// even no ................
let even = 0 ;
let na = 1;
while( na < 50 ){
    // console.log(na);
 if (na % 2 == 0){
    console.log( "these is the even no",na);
 }else{
    console.log("these are are the odd numbers",na);
 }
 na++;
};

// for loop .......................
let ev = 0;
for (let i= 0; i < 20 ; i+=2){
    if (i % 2 == 0){
console.log("these no is even and used by the for loop",i);
    }else{
        console.log("these no is odd",i);
    };
};

// calculate a sum and then give me the sum by using the for loop:
let sumTotal = 0;
for (let i = 11; i < 20 ; i++){
    sumTotal = sumTotal + i ;    
}
console.log("this is the total sum of these numbers", sumTotal);

// decremental for loop  

for (let i = 10 ; i >= 1; i--){
    console.log("this is the exemple of the decremental for loop",i)
};

// decremental in while loop
let numb = 30;
while( numb >20){
    console.log("decremental by using the while loop",numb)
    numb--;
};
// giving the number from 1 to 30 which is divisible by 5 
for (let i = 1; i <30 ; i++){
    // console.log(i);
    if (i % 5 == 0){
        console.log(i);
    };
};

// suppose you are asiking that give me the all numbers till 30 which is devided  by 3 or 5  or 2
for (let i = 1; i <30 ; i++){
    // console.log(i);
    if (i % 5 == 0 || i % 2 == 0 || i % 3 == 0){
        console.log(i);
    };
};
// suppose you are asiking that give me the all numbers till 30 which is devided  by 3 and 5
for (let i = 0; i <30 ;i++){
    if ( i % 3 == 0  && i % 85 == 0){
        console.log("these numbers are found acording this condetion", i);
    }
};

                    // break point  in loops 
// suppose we have one loop which is saying that we will run our loop till 50 but you want to stop that loop when its has the max vaue 35 
let lastNO = 0;
for( let n = 1; n<50; n++){
    console.log("my value is ",n);
    if(n >=35){
     lastNo= n++;
        break;
    }
};
console.log("loop has ended on",lastNo);

// breaking by using the while loop 
let stop = 0;
let num = 1;
while( num <30){
    console.log("num is now",num)
    if(num >20){
      stop =+ num;
        console.log("I want you to stop",stop);
        break;
    }
    num++;
};



// continue........................
 for(let i = 1; i<20;i ++){
    if(i % 2 == 1){// in this condetion we are declearing that if i is devided by 2 and then giving the reaminder 1 then skip all the rest of code then go for again iteration;
        continue;
    }
    console.log(i);
 };

//  by using the while loop 
let i = 1;
while(i <20){
    i++;  //in continue case you need to increment it before the continue condetion otherwise its becoming in infinite loop so ** carefull 
    if (i % 2 == 0){
        continue;
    }
    console.log(i);
};

// Do while loop 
 let first = 0;
 while( first <10){
    console.log(first);
first ++;
 }
// this is normal while loop 
// this is do while loop 
let a = 0;
do{
    console.log("print me",a);
    a++;
}
while( a > 5); //we are saying bassically that do this while this condetion is true but before checking the condetinon it will run even once 

// for of loop  .............

// basically we are doing it for the arrry 
 

