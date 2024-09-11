// .............................ARRAY......

let  n = [12,32,43,55,65,66,76,43,55,65,66,76];
console.log(n.length);
console.log(n);
console.log(n[2]);
const no = n[3];
console.log(no);
n [2] = 5555;
console.log(n);
// .........................................includes:
let names = ["Ratan","sanatan","kartoon","nakib","sali","krishna","mohan"];
console.log(names.includes("krishna"));
if (names.includes("Ratan")){
    console.log("will go for play")
}else{
    console.log("no playing");
}
// ............n..........is Array Check
let sweet = ['raso g ol la'];
let  ns = [12,32,43,55,65,66,76,43,55,65,66,76];
let Name = ["Ratan","sanatan","kartoon","nakib","sali","krishna","mohan"];
console.log(Array.isArray(sweet));
console.log(Array.isArray(ns));
console.log(Array.isArray(Name));
