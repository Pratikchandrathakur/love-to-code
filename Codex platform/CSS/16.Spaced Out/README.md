# 16. Spaced Out
## The Margin Box
The outermost layer of an element's box model is the margin box. This layer that surrounds an element's border is what ultimately separates elements from one another on the page.
<img  src="https://www.codedex.io/images/css/exercise-16-margin-layer-highlight.png">

# Margin layer of CSS Box Model

We can set this with the margin property. The following example adds a margin of 40 pixels to all sides of an element:
````
margin: 40px;
````
But if we want to just add margin to a single side:
````
margin-top: 20px;
margin-right: 10px;
margin-bottom: 20px;
margin-left: 10px;
````
Absolute or relative units can be added to:

- margin-top: The top side of an element.
- margin-right: The right side of an element.
- margin-bottom: The bottom side of an element.
- margin-left: The left side of an element.
Like the padding and border properties, margin is a shorthand for each side of the element:
````
margin: 20px 10px 20px 10px;
````
Unlike the other boxes, the margin box has its own width and height that is not counted towards the element's size.

Note: What is "counted" towards an element's size is covered in the next exercise!

## Centering Content
You can also horizontally center elements with the margin property, using auto.

Things sometimes look better with a little symmetry!

However, make sure to set a width property to the element you wish to center:
````
#container-element {
  width: 300px;
  height: 300px;
  border: 3px solid;
}

#inner-element {
  width: 100px;
  height: 100px;
  border: 1px solid;
  background-color: orange;
  margin: auto;
}
````
Which will look like this:
<img src="https://www.codedex.io/images/css/exercise-16-margin-auto-example-1.png">
Render of element centered via margin:auto

Instructions
Let's finish our mini-app with some margins!

First, apply margin: auto; to the #outside-wrapper selector.

Then, add a margin of 15px to the top and bottom of elements with a class of .post-wrapper.

After selecting "Run" once more, check out what the page looks like now.
