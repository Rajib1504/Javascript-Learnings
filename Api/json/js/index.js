function index() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    //     .then((data) => goforword(data));
    .then((data) => {
      giveMail(data);
      goforword(data);
    });
}
function goforword(data) {
  // remember when you want to get some value the you need to use a parameter otherwise it wouldn't get the value
  //     console.log(data); //we got the values inside the array
  //   loop through
  //   for (const user of data) {
  // console.log(user); // got the value as like obj one by one.
  // console.log(user.name, user.username); // get name and username also

  const ul = document.getElementById("list");
  for (const user of data) {
    const uName = user.name;
    //     console.log(uName);
    const li = document.createElement("li");
    li.innerHTML = `
         <li>${uName}</li>
        `;
    ul.appendChild(li);
  }
}

// mailcollection:
function giveMail(data) {
  const ul = document.getElementById("list");
  for (const user of data) {
    const email = user.email;
    //     console.log(email);
    const li = document.createElement("li");
    li.innerHTML = `
    <li> my email${email}</li>
    `;
    ul.appendChild(li);
  }
}
