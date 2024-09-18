// // Events :
// Here is a list of commonly used JavaScript events with brief descriptions:
{
  // 1. **`click`**: Fired when an element is clicked.
  // Option 1:on html not use
  {
    /* <body onclick="document.body.style.backgroundColor='green'"></body> */
  }
  // Option 2 : call the function from the html(some time will use)
  function cngColor() {
    const changeColor = (document.getElementsByClassName(
      "color"
    )[0].style.backgroundColor = "blue");

    //   <div class="color" onclick="cngColor()"></div>
  }
  // Option 3:(this we will also use sometimes)
  // creating function in js and then declearing it in js:
  {
    const tomato = (document.getElementById("grey").onclick = doTomato); // without using the id this style is not possible.// here we just need to inset the name because click will be done then this function will execute.

    function doTomato() {
      document.body.style.backgroundColor = "tomato";
    }
  }
  {
    const yellow = (document.getElementById("yellow").onclick = function () {
      document.body.style.backgroundColor = "yellow";
    });
  }
  // option-4:(this also will use )
  const pink = document.getElementById("pink");
  pink.addEventListener("click", function () {
    //this method call even listner or even handers
    document.body.style.backgroundColor = "pink";
  });
  // option-4
  const sky = document.getElementById("skyblue");
  sky.addEventListener("click", skyClr);
  function skyClr() {
    document.body.style.backgroundColor = "skyblue";
  }
  // Main : which we will work it most of the time.(Most of the case we will use this)
  const golden = document
    .getElementById("gold")
    .addEventListener("click", function () {
      // this function name is callback function
      document.body.style.backgroundColor = "gold";
    });
}
// 2. **`dblclick`**: Fired when an element is double-clicked.
// 3. **`mousedown`**: Fired when a mouse button is pressed down.
// this
// 4. **`mouseup`**: Fired when a mouse button is released.
// this
// 5. **`mouseover`**: Fired when the mouse pointer moves over an element.
// this
// 6. **`mouseout`**: Fired when the mouse pointer moves out of an element.
// 7. **`mousemove`**: Fired when the mouse pointer moves within an element.
// 8. **`contextmenu`**: Fired when the right mouse button is clicked.
// 9. **`wheel`**: Fired when the mouse wheel is used.
// 10. **`keydown`**: Fired when a key is pressed down.
// this
// 11. **`keyup`**: Fired when a key is released.
// this
// 12. **`change`**: Fired when the value of an input, select, or textarea element changes.
// 13. **`input`**: Fired when the value of an input element changes in real-time.
// 14. **`focus`**: Fired when an element gains focus.
// this
// 15. **`blur`**: Fired when an element loses focus.
// this
// 16. **`submit`**: Fired when a form is submitted.
// 17. **`load`**: Fired when the entire page and its resources have loaded.
// 18. **`unload`**: Fired when the page is unloaded or navigated away from.
// 19. **`resize`**: Fired when the window is resized.
// 20. **`scroll`**: Fired when the document view or an element is scrolled.
// 21. **`dragstart`**: Fired when an element starts being dragged.
// 22. **`dragend`**: Fired when dragging an element ends.
// 23. **`drop`**: Fired when an element is dropped onto a drop target.
// 24. **`copy`**: Fired when content is copied to the clipboard.
// 25. **`cut`**: Fired when content is cut from the document.
// 26. **`paste`**: Fired when content is pasted from the clipboard.
// 27. **`play`**: Fired when media playback starts.
// 28. **`pause`**: Fired when media playback is paused.
// 29. **`ended`**: Fired when media playback ends.
// 30. **`pointerdown`**: Fired when a pointer (mouse, pen, touch) is pressed.
// 31. **`pointerup`**: Fired when a pointer is released.
// 32. **`pointermove`**: Fired when a pointer is moved.
// 33. **`pointerover`**: Fired when a pointer enters an element.
// 34. **`pointerout`**: Fired when a pointer leaves an element.
// 35. **`pointerenter`**: Fired when a pointer enters an element (bubbling).
// 36. **`pointerleave`**: Fired when a pointer leaves an element (bubbling).
// 37. **`animationstart`**: Fired when a CSS animation starts.
// 38. **`animationend`**: Fired when a CSS animation ends.
// 39. **`animationiteration`**: Fired when a CSS animation completes an iteration.
// 40. **`transitionend`**: Fired when a CSS transition completes.
// 41. **`touchstart`**: Fired when a touch point is placed on the touch surface.
// 42. **`touchend`**: Fired when a touch point is removed from the touch surface.
// 43. **`touchmove`**: Fired when a touch point is moved along the touch surface.
// 44. **`touchcancel`**: Fired when a touch event is interrupted.

// const items = document.getElementById('items');
// items.addEventListener("click",)

const items = document.getElementsByClassName("item");
console.log(items);

for (const item of items) {
  item.addEventListener("click", function () {
    const dispaly = document.querySelector("#display");
    dispaly.innerText = item.innerText;
  });
}
