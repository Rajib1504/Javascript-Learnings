// this: don't understand anything
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`sleep now ${this.name}`);
  }
  activity() {
    this.sleep(); // this is mean here sleep method
  }
}
const kodom = new person("kodom ali", 22);
console.log(kodom); //without sleep
kodom.sleep(); // with sleep function
const badam = new person("kacha badam", 21);
badam.sleep(); // with sleep function
