// manupulateing the vlaue of the h1 handle with care:

const btnHandle = document.getElementById("change");
btnHandle.addEventListener("click", change);
function change() {
  const chanevlue = document.getElementById("handelCare");
  chanevlue.innerText = "Safe Drive Safe Life";
}

// changing the defaut text
const btn = document
  .getElementById("change2")
  .addEventListener("click", function () {
    const changeValue = (document.getElementById("dValue").innerText =
      "Use Helmate During the driving");
  });

//   giving the new vlaue by renderting into the input box

const button = document.getElementById("in");
button.addEventListener("click", function () {
  const inputValue = document.getElementById("type").value;
  const para = document.getElementById("Default");
  para.innerText = inputValue;
  document.getElementById("type").value = "";
});
