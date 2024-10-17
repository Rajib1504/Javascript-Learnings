/* javaScript Object Notification(JSON): for cereat json we need 2 things.
stringify: 
*/
const user = { id: 3, name: "sukla", job: "artist", add: "uttar pradesh" };
const stringify = JSON.stringify(user);
console.log(user);
console.log(stringify);
/*
{ id: 3, name: 'sukla', job: 'artist', add: 'uttar pradesh' }normal

{"id":3,"name":"sukla","job":"artist","add":"uttar pradesh"}json string

Deffirence:
1.apart from the number and boolean value it will do the quotation to all 
2. its converting object to string.
*/
// JSON.parse() :
const person = {
  person: {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      postalCode: "12345",
    },
    contact: {
      email: "john.doe@example.com",
      phone: "555-1234",
    },
  },
};
console.log(person); //normal object
const stringify2 = JSON.stringify(person); // object to json string.
console.log(stringify);
const Object = JSON.parse(stringify2); // json string to object
console.log(Object);
/*
JSON.parse():
this method is to turns from the json string to object back
*/
