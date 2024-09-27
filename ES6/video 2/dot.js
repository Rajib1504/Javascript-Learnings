// dot notaiton:
const person = {
  name: "kodom ali",
  job: "badam khai",
  4: "four", // bracket notation need to acces this
  "add-ress": "talpata", // vajila jinis aiivaby likhty hby
};
console.log(person.name);
console.log(person["job"]);
const porp = "job";
console.log(person[porp]);
// console.log(person.4);//error
console.log(person[4]);
// console.log(person.'add-ress');//error
console.log(person["add-ress"]);
