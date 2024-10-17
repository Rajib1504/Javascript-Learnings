const myLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();
    if (success <= 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};
myLoader()
  // we can do the fetch with the value which we get from here
  .then((data) => console.log("resolve data", data))
  .catch((error) => console.log("rejected", error));

//   await:
// creating through async function :
async function loadData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
}
loadData();

// arrow :
const dataLoad = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
};
dataLoad();
