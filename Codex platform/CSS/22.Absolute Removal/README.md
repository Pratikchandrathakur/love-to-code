# 22. Absolute Removal
## position: absolute
If we position an element with absolute, we break it out of the page's flow. If we then give the element a top, right, bottom, and/or left property, it is placed according to the top-left of its closest non-static element.

For example, say we have the following HTML code:
````
<body>
  <div id="red"></div>

  <div id="outer-div">
    <div id="blue"></div>
  </div>

  <div id="green"></div>
</body>
````
We have the #red, #blue, and #green elements, with one of them nested inside of an #outer-div element. If we set the position of #outer-div to relative and the #blue and #green elements to absolute:
````
body {
  width: 100%;
  height: 100vh;
}

div {
  width: 200px;
  height: 200px;
}

#red {
  background-color: red;
}

#outer-div {
  padding: 15px;
  border: 2px solid;
  position: relative;
  top: 30px;
  left: 30px;
}

#blue {
  background-color: blue;
  position: absolute;
  top: 0;
  left: 0;
}

#green {
  background-color: green;
  position: absolute;
  top: 30px;
  left: 55px;
}
````
The following is rendered to the screen:
<img src="https://www.codedex.io/images/css/exercise-22-absolute-position.png">
<br>
Absolute positioned green and blue div elements

Because the #blue element is inside of another positioned element, it is absolutely positioned in the top-left corner of #outer-div when top and left are set to zero.

Conversely, the #green element is absolutely positioned at the top-left corner of the <body> element since that is the closest positioned parent. We've moved it 30px and 55px from the top and left edges of the screen.

## Instructions
- Let's go back to the #notification-div element and change its position from relative to absolute.

- Make sure to leave the other styles for the top and left.

- The notification should now be near the top of the page, towards the middle.

- Then, in the header selector, give it an absolute position along with a width of 100%.

- Lastly, create a new selector for the main element, and give it a relative positioning along with a top of 103px.
