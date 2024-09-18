// style using tag name :
const sections = document.querySelectorAll("section");
for (const section of sections) {
  // console.log(section); // yes its working
  section.style.border = "2px solid black";
  section.style.marginBottom = "2rem";
  section.style.textAlign = "center";
  section.style.background = "skyblue";
  section.style.color = "white";
  section.style.borderRadius = "15px";
}
// style by targeting id :
const idTarget = document.getElementById("ambission");
// console.log(idTarget); //target done
idTarget.style.fontSize = "22px";

// style by adding classlist:with some style.
const clList = document.querySelector("#ambission");
// console.log(clList); //target done
const cladd = clList.classList.add("bg-blue"); // class has added succesfully with properties.
// note: if you has declear some property here and you giveng the same property form class so it will not work becasue of priourity wise this is less powerfull.
const cldel = clList.classList.remove("largeText"); // we delete the class
