/* truthy:
1.true
2.any number(+ve,-ve)will be truthy other than 0
3.any string other than empty string 
4.'0'
5.{}
6.[]

flasy:
1.false
2.value 0 
3.''(empty string)
4.undefined
5.null

not expresson:
(!)
(!!)
*/

const x = "";
if (!x) {
  console.log("value is falsy");
}
const y = "abc";
if (!!y) {
  console.log("value is truthy");
}

// 1. one(!) symbole is refer to change the value condetion suppose if the value is true it will make it false if false then will make it true.
// 2. two(!!) symbole is refer to change it 2 times so ultimately the element will get the default value which it has
