fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json()) //.json is not semmiler but close to json.parse(sss)
  .then((json) => console.log(json));

fetch(""); // way to write the fatch(api)
("https://jsonplaceholder.typicode.com/todos/1"); // this is a link which contins some object(server)

const url = "https://jsonplaceholder.typicode.com/todos/1";
fetch(url)
  .then((Response) => Response.json())
  .then((json) => console.log(json));

const arrow = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

arrow(url);

function clickme() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(url)
    .then((Response) => Response.json())
    .then((json) => console.log(json));
}
