// closer:A closure in JavaScript is a function that has access to the variables of its parent scope, even after the parent function has returned. Closures are created when a function is defined inside another function.
function kitchen() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

const secondServer = kitchen();
console.log(secondServer());
console.log(secondServer());

// see here basically we create a function which is returning a function where its doing the count ++.
// we will count how many times our first servent has come to kitchen
// we will count how many times our second servent has come to kitchen too but then both counting will be deffirent.

// you will understand it better in devtool in browser
