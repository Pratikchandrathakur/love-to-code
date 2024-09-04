# Normal Flow of Elements
When elements are displayed on the screen, they will appear as close to the top and left edges of their parent elements as possible. They will also appear either as blocks or inline elements.

This is known as the normal flow of elements.

We can control how an element is normally positioned in this flow with the position property! By default, all elements have a static position:
````
position: static;
````
<img src="https://www.codedex.io/images/css/exercise-20-static-position.png">
TWo block-level div elements, 1 red and 1 blue, in default static position.<br>

These two block-level {div} elements follow the normal flow where the red {div} renders first and the blue {div} renders on the very next line.

Note: It usually isn't necessary to set position to static since this is the default for all elements.

Instructions
Let's explore how normal flow works by adding a notification to the code from the last exercise!

Inside the index.html file, let's add the following just after the opening <main> tag:
````
<div id="notification-div">
  <details>
    <summary><strong>New Course Offering!</strong>🎥📓</summary>
    <p>We've got a new 6-week course on video editing where you get to meet one-on-one with an industry professional each week! Join <u>here</u>!</p>
  </details>
</div>
````
Then, select the #notification-div in the styles.css file and add the following:
````
#notification-div {
  background-color: #ed8a0a;
  color: #313131;
  padding: 5px;
  border: 2px solid darkred;
  border-radius: 5px;
  width: 25%;
}
````
Next, let's render our index.html to see where the block-level #notification-div is placed on the page.

Note: Click on the arrow to show the content below the <summary> element.

Before moving forward, try nesting the #notification-div within other elements to see how the normal flow places it on the page.
