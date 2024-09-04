# Exercise

## 23. Fixed Banner
## position: fixed
The fixed position works similar to absolute by taking an element out of the normal flow of the page. However, fixed elements stay where they are placed on the screen even when you scroll up and down of the page.

For example, let's look at this draft HTML:
````
<h1>Site Draft</h1>
<ul>
  <li><a href="#about">About</a></li>
  <li><a href="#projects">Projects</a></li>
</ul>
<div id="about">
  <h2>About</h2>
</div>
<div id="projects">
  <h2>Projects</h2>
</div>
````
If we wanted to ensure the ul unordered list element was always on the page no matter where we scrolled on our site:
````
ul {
  background-color: lightyellow;
  border: 2px solid;
  padding: 2px;
  list-style-type: none;
  position: fixed;
}

div {
  height: 75vh;
}

#about > h2 {
  background-color: lightseagreen;
}

#projects > h2 {
  background-color: orange;
}
````
With the position of the ul unordered list element set to fixed, we'd get something like the following:
<br><br>
<img src="https://www.codedex.io/images/css/exercise-23-fixed-position.gif"><br>

Unordered list fixed to top-left of screen with position:fixed property

# Instructions
<br>
Let's return to our tutoring site and apply what we've learned about the fixed position.
<br>
Inside the styles.css file, go to the selector for the #notification-div and change its position property to fixed.
<br>
Then, change the top and left properties to 100px and 15px, respectively. Also, add a z-index property of 1.
<br>
Lastly, go to the selector for the header and do the following:
- Apply a position: fixed; style.
- Add z-index: 1; to place the header above whatever scrolls past it.
- Ensure the header spans the full width of the screen.
