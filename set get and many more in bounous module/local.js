const mello = window.localStorage.getItem("solo");
const hello = localStorage.getItem("solo"); // we can also see some where window somewhere not

console.log(hello);
const setAge = () => {
  localStorage.setItem("age", 31);
  window.localStorage.setItem("age", 31); // we can also see somewhere window
};
