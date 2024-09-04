# 21. It's All Relative
## position: relative
Next, let's explore relative!

The relative position allows your element to be "moved" around the screen, away from where it would normally be on the screen.

When we set an element's position property to anything but static, it can be moved with the top, right, bottom, and left properties. This includes relative.

Remember the red and blue <div> examples from the previous exercise? Here is the CSS code for it:
````
div {
  width: 200px;
  height: 200px;
}

#div-a {
  background-color: red;
}

#div-b {
  background-color: blue;
}
````
We can break #div-b out of the normal flow by changing its position to relative, and then move it from the left and top sides by 25px:
````
#div-b {
  background-color: blue;
  position: relative;
  left: 25px;
  top: 25px;
}
````
<img src="https://www.codedex.io/images/css/exercise-21-relative-position-1.gif" width="500px">
<br>
Displacement of blue div element with relative positioning, via developer tools

The top and left properties can also be set with relative units like 5em and 50%.

Note: Keep in mind that top moves an element down the screen, right moves it to the left, bottom moves it up, and left moves it right. Imagine something is pushing the element box from that side (i.e., push the element 25px to the right from the left side).

## z-index
If you work with position: relative long enough, you'll notice how some elements will overlap other elements.

When you don't want this, try using the z-index property! This changes the way elements are "layered" on the site, regardless of when they appear on the HTML file. It's like magic! 🪄

Let's revisit the example with the two <div> elements and demo z-index by adding one more #div-c element:
````
div {
  width: 200px;
  height: 200px;
}

#div-a {
  background-color: red;
}

#div-b {
  background-color: blue;
  position: relative;
  left: 25px;
  bottom: 25px;
  z-index: -1;
}

#div-c {
  background-color: lightgreen;
}
````
This renders something like the following:<br>
<img src="https://www.codedex.io/images/css/exercise-21-relative-position-2.gif" width="500px">
<br>
Displacement of blue div element with relative positioning, and putting behind red div with z-index

## Instructions
With the #notification-div placed just after the opening <main> tag, go to the styles.css file and set its position property to relative.

Then, let's move the element away from where it would normally be by adding a top of 10px and a left of 5%. Select the "Run" button to re-render the page and move the element.

Next, either copy/paste or move the #notification-div element to another valid place inside the index.html (like inside one of the <section> elements).

Select "Run" again to observe how the element is moved relative to the position of its containing parent element.
