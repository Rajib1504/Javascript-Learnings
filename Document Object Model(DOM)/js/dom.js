// console.log("connecting the js with html");
// console.log(document); // you will get the all things about the html which has renderd.
// console.log(document.body); // we will get all things(tags,text,img etc) from the document body.

// get Element by tag name

// const liList = document.getElementsByTagName('li');
// console.log(liList.innerText);
const colectionLi = document.getElementsByTagName("li");

for (const oii of colectionLi) {
  // console.log(oii.innerText);
}

// loop over h1
const h1col = document.getElementsByTagName("h1");
for (const h of h1col) {
  // console.log(h.innerText);
}

// getElementsByclassName:
const classCol = document.getElementsByClassName("abc");
for (const c of classCol) {
  // console.log(c.innerText);
}
// note: if you want to get only first class then you need to mention the index value because as we know class is giving a colection of an array like object.

// getElementById:
const id = document.getElementById("xyz");
// console.log(id.innerText);
id.innerText = "Here is the id";
// console.log(id);

// document.querySelectorAll:
const qall = document.querySelectorAll(".me li");
for (const q of qall) {
  // console.log(q);
}

// document.querySelector:

const quary = document.querySelector(".me");
// console.log(quary);

// ................................................................................
// style setting :
document.getElementById("xyz").style.fontSize = "32px";
document.getElementById("xyz").style.backgroundColor = "blue";

// class list :
const clss = document.querySelector(".i");
// console.log(clss.classList);
// add class :
const addnew = clss.classList.add("I'mHere");
// console.log(document.getElementsByClassName("i"));
// remove class :
let remov = clss.classList.remove("she");
// console.log(document.getElementsByClassName("i"));

// getAttribute method:first need to target the element by id or class then you can try to find by using the get attribute.
const getAtr = document.querySelector("#unorderdList");
// console.log(getAtr.getAttribute("class"));

// set method:for set an attribute you need to set 2 value one is the name and next one is the value.
const setAtr = document.querySelector("#btn");
setAtr.setAttribute("title", "touch me"); // if you will do hover on the click me btn you will see the pop up.

//inner html:
const html = document.querySelector("#unorderdList");
// console.log(html.innerHTML);

// vlaue changeing:
const cng = (document.getElementsByClassName("changeMe")[0].innerHTML =
  "<h1> I am Changed now not like before:</h1>");

// inner text:
const inrTxt = document.getElementsByClassName("bc")[0].innerText;
// console.log(inrTxt);
//  style in depth :

// node in details :
// note types:text node,comment node

// 1.child nodes: all child of element
// id/class/tag name.childNodes then enter
// id/class/tag name.childNodes[1]//will give you the first child node
// 2.first child: 1 child of the element
// id/class/tag name.firstChild
//
// ....
// 1.a for nested condetion :
// id/class/tag name.childNodes[nested index].childNodes // you will get the all nested mean which tags are inside this that you will get.
//
// 1.a.i for nested childNodes siblings:
// id/class/tag name.childNodes[nested].childNodes[index of child].next siblings/.previous siblings
//

// create Element:
// this is the way to creat a new element...
const div = document.createElement("div"); // creating tag.
div.class = "newElement"; // giving the class name.
div.id = "new"; // giving the id name.
div.innerText = "I'm the new div which has created newly."; // giving the inner texts

//append child:
document.querySelector("#xyz").appendChild(div); //pushing to the place where you want it.

// parentnode:
// to find parent (.parent)

// child node:
// child node is counting everything everything text,comment,element

// childrens: this is a html element which is not counting anything apart from html element.
const liCount = document.getElementsByClassName("xyz");
console.log(liCount);
