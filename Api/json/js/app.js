console.log("im connected");
document.getElementById("loadData").addEventListener("click", () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
});

function fetchme() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((data) => display(data));
}
function display(data) {
  console.log(data);
}
