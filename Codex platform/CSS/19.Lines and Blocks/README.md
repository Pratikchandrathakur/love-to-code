# 19. Lines & Blocks
## Displaying Elements
Hooray! We've reached the final chapter of the CSS course!

Picking up where the last chapter left off, we're going to dive further into how elements appear on our browser via CSS. By the end, you'll have all the pieces you'll need to design a great website with a solid layout!

If a web page were like a piece of lined notebook paper and the elements were what you wrote on the page:

Some elements would be written on their own line.
Other elements would be able to share a line with other elements.
We can apply this concept to how elements are displayed on a site, from small ones like [a] and [p] to larger container-like ones such as [div], [section], or [body] tags.

Elements are either displayed on the block level or the inline level.

Block elements take up the entire width of whatever they're inside of. However, this can be changed (as well as the height).

By default, block elements are rendered on their own line by themselves.

The [div] and [p] elements are common block elements:
````
<div></div>
<p>Hello, World! What shall I research on Wikipedia today?</p>
````
Each element is displayed on its own line. Let's add some styles to further visualize this example:
````
div {
  width: 100%;
  height: 100px;
  background-color: red;
}

p {
  border: 1px solid blue;
}
````
The [div] block element now has a defined width and height, as well as a background-color. Since it is rendered before the <p> paragraph element, the page will render like so:
<img src="https://www.codedex.io/images/css/exercise-19-rendered-block-elements.png">
Rendered div element (red), followed by an paragraph element

Inline elements only take up as much space as needed, and other elements may appear beside them! The <a> anchor element is a very popular inline element because links are always being used within blocks of text (e.g., a Wikipedia article with lots of links to other places).

In the previous example, if we wrap “Wikipedia” into a link with the <a> anchor element (within the <p> paragraph element):

Red div element, followed by a paragraph element that contains an inline link.

The "Wikipedia" text becomes a link that stays in line with the parent <p> element.

If we wanted to change the default display of these elements, we would use the display property!

a {
  display: block;
}

Note: Unlike block elements, inline elements cannot change their width or height properties.

When we change the default display of the <a> element from inline to block, this is the result:

Red div element, followed by a paragraph element that contains a link displayed as a block.

There is one other display property to explore…inline-block!

When you set an element to display: inline-block, you get the best of both worlds:

It can share the same line with other inline elements.
Despite being inline, its width and height can be changed.
For example:
````
#block {
  background-color: lightcoral;
  height: 100px;
}

#inline {
  background-color: lightblue;
}

#inline-block {
  background-color: lightgreen;
}
````
This renders something like the following:

A red div element set to the default block display; another div set to inline; another green div set to inline-block

Note: As shown above, some elements, like the <div> element, behave weirdly when set to just inline. Any content inside remains, but the width and height of the <div> are practically not there anymore.

Instructions
It's time we try out the display property ourselves!

In an index.html file, copy/paste the following HTML code:
````
<header>
  <h1 id="header-title">Rendezvous Tutoring</h1>
  <p id="header-text">Top-notch 1:1 Instructors!</p>
  <nav>
    <ul>
      <li><a href="#story-section">Story</a></li>
      <li><a href="#services-section">Services</a></li>
      <li><a href="#contact-section">Contact</a></li>
    </ul>
  </nav>
</header>
<main>
  <section id="story-section">
    <h2>Our Story</h2>
    <p>For over 15 years, we have provided an impactful, results-focused tutoring experience to all of our pupils!</p>
    <p>
      It all started as homework-help between two friends at the library. One friend needed the other's help with algebra and how they could apply it in everyday life.
    </p>
    <img id="story-image" src="https://cdn.pixabay.com/photo/2022/11/21/09/43/success-7606515_1280.jpg" alt="" />
  </section>
  <section id="services-section">
    <h2>Services</h2>
    <p>We offer a multitude of tutoring services across many platforms, including:</p>
    <ul>
      <li>One-on-one tutoring sessions with seasoned industry professionals.</li>
      <li>A vast tutoring network covering over 10 industries and over 50 skills, trades, and disciplines.</li>
      <li>Chapter meetups for "lightning round-ezvous" events across 25 U.S. cities!</li>
    </ul>
  </section>
  <footer id="contact-section">
    <h2>Contact</h2>
    <p>Interested in upskilling with Rendezvous Tutoring? Feel free to sign-up with your e-mail below to learn more!</p>
    <form>
      <input type="email" placeholder="e-mail here" required />
      <input type="submit" value="Sign Up" />
    </form>
  </footer>
</main>
````
Next, copy/paste the following starter CSS in a styles.css file:
````
* {
  font-family: Lato, sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

header {
  background-color: #492b7c;
  color: #fff;
  border-bottom: 2px solid #313131;
}

header,
h2 {
  text-align: center;
}

nav > ul {
  margin: 5px 0;
}

nav li {
  background-color: #c2c2ff;
  padding: 7px;
  margin: 1em auto;
  width: 25%;
  border: 2px solid;
  border-radius: 5px;
  list-style-type: none;
}

section {
  min-height: 100vh;
}

footer > p {
  width: 80%;
  margin: auto;
}

section > h2 {
  border-bottom: 0.5px solid grey;
}

#story-section {
  background-color: #fffbc4;
}

#story-section > h2 {
  background-color: #c2ffff;
}

#story-image {
  max-width: 100%;
  max-height: 250px;
  border-radius: 5px;
}

#services-section > h2 {
  background-color: #88b3b3;
}

#services-section > ul {
  list-style-position: inside;
}

#contact-section {
  background-color: #492b7c;
  color: #fff;
}

form {
  width: max-content;
  margin: auto;
}
````
Select the “Run” button to make sure this content renders correctly.

Now, let's do the following in the styles.css file:

- Set the display of the list items in the nav menu (nav li) to inline-block.
- Set the display in the #story-image selector to block.
- Center the #story-image element by setting the margin to auto.
- Save the files and select the “Run” button to see how these elements display differently.
