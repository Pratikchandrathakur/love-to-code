13. Inspection
# The Box Model
Now that we know of some well-known properties, let's talk about boxes. 📦


Thus far, our CSS output has looked kind of rectangular. That is because it's in a box. And that makes sense, after all, since we're using a rectangular screen!

Technically, everything on a web page is in a box. Every element on a page follows the box model:
<img src="https://www.codedex.io/images/css/exercise-13-box-model.png">

CSS Box Model Diagram

The box model describes how an element handles its content and the space around it.

Every element is made of four box layers in the following order, from innermost to outermost:

A content box for things like text and images.
A padding box of space around the content.
A border box that goes around the padding.
A margin box of empty space that surrounds the whole element.
In this chapter, we will learn about all four layers of the box model.

For now, let's see what the box model looks like in the browser!

Instructions
Go to the course page for The Origins II: CSS: https://www.codedex.io/css

Find the box model in your browser's dev tools:

Google Chrome: Right-click > "Inspect" > "Computed" tab.
Safari: "Safari" > "Settings" > "Advanced" tab > "Show features for web developers" (near the bottom). Now click "Develop" > "Show Web Inspector".
<img src="https://www.codedex.io/images/css/exercise-13-chrome-box-model.png">
Box Model view on Google Chrome web browser

Try looking at the various elements and see their sizes. Notice how the elements can take different shapes, but they all follow the box model.
