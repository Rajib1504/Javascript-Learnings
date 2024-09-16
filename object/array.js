const products = [
{id:1 ,name: 'iphone',price : 120000 },
{id:2 ,name: 'mac book air laptop',price : 102000 },
{id:3 ,name: 'samsung s24 phone',price : 90000 },
{id:4 ,name: 'Dell inspiron laptop',price : 890000 },
{id:5 ,name: 'xaiomi phone',price : 350000 },
{id:6 ,name: 'Lenovo yoga laptop',price : 870000 },
{id:7 ,name: 'Phone plus',price : 800000 },
]
      
// console.log(products);
// if we want to get the phones only how you will do ?
function getPhone(products,search){// here in parameter you need to declear the search for search value.
// console.log(products);
const phones = [];
for(const product of products){
      // console.log(products)
      const items = product.name;
      if(items.toLowerCase().includes(search)){// here we use the includes to get the search value and this is the so shortest and simple way.
            phones.push(product);
      }
}
return(phones);

}
const findPhone = getPhone(products,'phone');// and what you want to search that you need to write here as a string or if its number the num because its has not defined yet.

console.log(findPhone);


// now get the laptops only.. 
function getLaptop(laptop,search){
      const lapStore = [];// this array to store the find items.
      for(const product of products){
            if(product.name.toLowerCase().includes(search.toLowerCase())){
                  lapStore.push(product);
            }
            return(product);
      }

}
const findLaptop = getLaptop(products,"laptop");
console.log(findLaptop);