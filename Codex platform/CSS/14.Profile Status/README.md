# Exercise

## 14. Profile Status
### The Border Box
While you may not realize it, most elements have a border!
<img src="https://www.codedex.io/images/css/exercise-14-border-layer-highlight.png">

Border layer of CSS Box Model

Let's learn how to make these borders visible.

The way to apply a border to our elements with CSS is... you guessed it! With the border property!

The border property is actually another shorthand that lets us combine the values of multiple properties into one declaration:

/* Both of these are the same */

h1 {
  border: 2px solid blue;
}

h1 {
  border-width: 2px;
  border-style: solid;
  border-color: blue;
}

border-width determines the "thickness" of the border, and is usually set with absolute units (e.g., pixels).
border-style includes values like solid, dashed, dotted.
border-color can be set with a named color, an rgb() value, or a hexadecimal.
Border properties (width, style, and color)

We can also style a single border if we want, by using border-top, border-right, border-bottom, or border-left properties:

h1 {
  border-top: 5px dashed red;
  border-right: 5px dotted purple;
  border-bottom: 5px double yellow;
  border-left: 5px solid green;
}

Minus a few hidden styles, this is what the rendered output looks like:

Four border properties separately applied to each side

### Round Corners
Another common practice for borders is rounding the corners using the border-radius property:

h1 {
  border: 2px solid blue;
  border-radius: 5px;
}

The rendered output will look like this:

Border radius example

You can use both absolute and relative units. The larger the value, the rounder the corner will be!

Instructions
For the next few exercises, we're going to practice the box model by building a mini-application that features posts of images and GIFs!

In the index.html file, add the following code:
````
<div id="outside-wrapper">
  <img id="top-img" src="https://images.unsplash.com/photo-1551027654-f7b9f56804c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />

  <ul id="post-list">
    <h2>My Feed</h2>
    <li>
      <div class="post-wrapper">
        <img class="post-img" src="https://www.carnegielibrary.org/wp-content/uploads/2016/02/CLPMain_1080x600.jpg" alt="Carnegie Library of Pittsburgh"/>
        <p>Visited the library! 📚 <b>#libraries</b> <b>#readingisawesome</b></p>
      </div>
    </li>
    <hr />
    <li>
      <div class="post-wrapper">
        <img class="post-img" src="https://media.giphy.com/media/AFHFoEv9fDOn7lIdlD/giphy.gif" alt="GIF of two people fist-bumbing with the caption 'YOU GOT THIS'" />
        <p>Carpe diem! <b>#wordsofencouragement</b> <b>#wordsofwisdom</b></p>
      </div>
    </li>
  </ul>
</div>

````

Next, add the following CSS to the styles.css file:
````
* {
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

/* Select `div` elements with `border` here */

#post-list > li {
  list-style-type: none;
}

li > div {
  text-align: left;
}

#top-img {
  width: 10em;
  height: 10em;
  /* Add `border` here */
  /* Add `border-radius` here */
}

#outside-wrapper {
  width: 90%;
  background-color: rgb(169, 206, 221);
  text-align: center;
}

.post-wrapper {
  text-align: left;
  background-color: #f5f5f5;
  /* Add `border-radius` here */
}

.post-img {
  width: 100%;
  /* Add `border-radius` here */
}
````

Under the comments in styles.css (/* Like this one */), add the following:

1.Select all div elements and assign a border that is 2px-thick, solid, and grey.<br>
2.Then, for the #top-img style, add a border that is 12px-thick, solid, and green.<br>
3.Next, add a border-radius of 50% to the #top-img style.<br>
4.Lastly, add a border-radius of 5px to the selectors for .post-wrapper and .post-img.<br>
Run styles.css again to view the new changes.
