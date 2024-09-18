// where to add ????
const trkPlcs = document.getElementById("palces"); // when you are trgeting by class names or id then don't put the . or # symbol,it will give the vlaue null.
console.log(trkPlcs); //checking done.
// creating a li tag inside the ul
// what to add ????
const li = document.createElement("li");
li.className = "newLi";
li.id = "i'm new";
li.textContent = "I'm the amazon jongol";
console.log(document.querySelector("#palces").childNodes); // here we are checking that where is text nodes becaue we can't append element on the text node.
// document.querySelector("#palces").childNodes[3].appendChild(li);//process 1

trkPlcs.appendChild(li); // process 2

// now we will creat a full ul with section .
// 1.where to add :??-- in main so target the main.
const main = document.getElementById("mainContainer");
console.log(main);

// 2.what to add??-- section with id and class.
const sec = document.createElement("section");
sec.id = "fruitbag";
sec.className = "fruits";

const h1 = document.createElement("h1"); // we have creted the next tag h1
h1.innerText = "I'm the fruits bag give me fruits:";
sec.appendChild(h1); // we have push the h1 inside the section
const ul = document.createElement("ul"); // we have created a ul tag for next li's
//
// .........we will push the ul after inserting value inside the ul otherwise ul will be empty..........
//
const li1 = document.createElement("li"); // creating li
li1.innerText = "I'm Apple"; // giving the inner texts
ul.appendChild(li1); // pushing into the ul
const li2 = document.createElement("li"); // creating li
li2.innerText = "I'm Jack Fruits"; // giving the inner texts
ul.appendChild(li2); // pushing into the ul
const li3 = document.createElement("li"); // creating li
li3.innerText = "I'm graves"; // giving the inner texts
ul.appendChild(li3); // pushing into the ul
const li4 = document.createElement("li"); // creating li
li4.innerText = "I'm goava"; // giving the inner texts
ul.appendChild(li4); // pushing into the ul
const li5 = document.createElement("li"); // creating li
li5.innerText = "I'm Mango"; // giving the inner texts
ul.appendChild(li5); // pushing into the ul
const li6 = document.createElement("li"); // creating li
li6.innerText = "I'm Banana"; // giving the inner texts
ul.appendChild(li6); // pushing into the ul
sec.appendChild(ul); // now we has push this ul inside the section tag
main.appendChild(sec); // at last we has push the section into the main .

// inner Html:
// set attribute by inner html:This is the so short way to create new elements with the inner texts
const sectionGirls = document.createElement("section");
sectionGirls.innerHTML = `
<h1>My girlFriends</h1>
<ul>
<li>Anaya Mandal</li>
<li>Alisha Khatun</li>
<li>Annana Roy</li>
<li>Anamika Agarwal</li>
</ul>
`;
main.appendChild(sectionGirls);

// note: which script tag will be come first that work will be execute firstly
