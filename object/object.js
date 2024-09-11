const subject = {
  name: "chemistry",
  sir: "Rajesh sir",
  age: 43,
  isGood: true,
  examDate: `30 August`,
  chapters: ["first", "second", "third"],
  type: "final",
  timing: "10 A.M",
};
console.log(subject);

const person = {
  name: "Ananya sengupta",
  age: 24,
  prfession: "webDeveloper",
  salary: 40000,
  married: true,
  "fev places": ["swizarland", "poland", "Indonesia", "italy"], //in this key we need to write it in quotation becase there are space. if there is not not space and its in camle case then we dont need to do it in quotation
};
console.log(person);
//dot notation <target the key inside the object by using the ().)>
let income = person.salary;
console.log(income);

let adult = person["age"];
console.log(adult);
console.log(person["prfession"]); // we need to write the key inside the quotaion becasue its a string.

// in some case we can't to access by the dot which case on that cases when we have any space in the key ...
// console.log(person."fev places");// its has showing us the errors
console.log(person["fev places"]);

// updating the value on object
person.salary = 6000;
person["age"] = 40;
console.log(person);

// changing value in deffirent way litte
const propName = person.prfession;
person["propName"] = "devops";
console.log(person["propName"]);
// what we have done here we first save the profetion in one variable then we change the variable and save it as a alternaive of profetion then we save it
{
const computer = {
  brand: "Asus",
  price: 45000,
  processor: "intel",
  hdd: 512,
  isBacklid: true,
};
// get the keys .......................
// if you wnant to see the keys 
const key = Object.keys(computer);
console.log(key);
 
// get the values .........................
const value =Object.values(computer);
console.log(value);


// nested object ....................
const collage = {
 name : "nsou",
 class :[11,12],
 events: "teachers day",
 exam: {
    exOf11 : "3rd june",
    exOf12 : "10 sept",
 }
}
 console.log(collage);
 collage.exam.exOf12 = "30 oct";// we change the value of exOf12.
 console.log(collage["exam"]["exOf12"]);
 
delete collage.events;
console.log(collage);


}
// loop over the object ............
{
const computer = {
    brand: "Asus",
    price: 45000,
    processor: "intel",
    hdd: 512,
    isBacklid: true,
  };

// for find the keys ..........
  for (const a in computer){
    console.log(a);
  };
 
// for find out the vlaue 
for (const value in computer){
    console.log( value,(" "),computer[value]);
};
// another way to get it  
const keys = Object.keys(computer);
console.log(keys);
console.log(keys,":",computer[keys]);


}