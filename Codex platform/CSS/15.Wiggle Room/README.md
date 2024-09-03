# 15. Wiggle Room
## The Padding Box
Next, let's explore the padding box!

Padding is empty space just outside of an element's content.
<img src="https://www.codedex.io/images/css/exercise-15-padding-layer-highlight.png">

### Padding layer of CSS Box Model

This layer of the box model is set with the padding property:
````
padding: 40px;
````
In the example above, we are adding 40px of padding to all four sides of a given element.

If we want to give separate padding values to any side of an element:
````
padding-top: 5px;
padding-right: 10px;
padding-bottom: 15px;
padding-left: 20px;
````

We can do the same thing with four separate styles, using just the padding property:
````
padding: 5px 10px 15px 20px;
````
From left to right, the values represent the styles for the top, right, bottom, and left sides.

Instructions
We'll continue building our mini-app by adding padding!

Let's add some padding styles by doing the following in the styles.css file:

- Select just the #post-list element and add a padding-right value of 40px.<br>
- Select all elements with a .post-wrapper class and add 50px of padding to the top, right, and left sides (but none on the bottom).<br>
Save the styles.css file and select "Run" to see the padding added around the image.
