console.log("im hre");
const add = () => {
  const product = document.getElementById("name");
  const quantity = document.getElementById("quantity");
  const productFild = product.value;
  const quantityFild = quantity.value;
  product.value = "";
  quantity.value = "";
  console.log(productFild, quantityFild);
  showMe(productFild, quantityFild);
  saveProductToLocalStorage(productFild, quantityFild);
};
const showMe = (productFild, quantityFild) => {
  const container = document.getElementById("container");
  const li = document.createElement("li");
  li.innerText = `${productFild}: ${quantityFild}`;
  container.appendChild(li);
};
// for find the item in local storage
const storedCartfromLocalStorage = () => {
  let card = {};
  const findCard = localStorage.getItem("card");
  if (findCard) {
    card = JSON.parse(findCard); // if value will found then will transfrom it in object
  }
  return card; // if vlaue will not found then will return the empty objecgt
};

const saveProductToLocalStorage = (productFild, quantityFild) => {
  const card = storedCartfromLocalStorage();
  card[productFild] = quantityFild;
  console.log(card); // we are getting it as a obj so localstorage can't take value aprt from string.
  const cardStringify = JSON.stringify(card);
  console.log(cardStringify);
  localStorage.setItem("card", cardStringify); // we have set it in local storage in key and value pare.
};
// now if you want that when you will open the browser you want to see the old valuse which you have saved
const displayTheSavedItems = () => {
  const savedCard = storedCartfromLocalStorage();
  console.log(savedCard);
  for (let item in savedCard) {
    // for see single by single key
    const quantity = savedCard[item]; // for value
    console.log(item, quantity);
  }
};
displayTheSavedItems();
