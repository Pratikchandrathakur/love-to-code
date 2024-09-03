# Exercise

## 17. Make it Count
### Content Box vs. Border Box
Let's look inward, at the content layer of the box model.


By default, an element's width and height properties only deal with the content box. But if there's any padding around the content, or a border, the entire element appears wider on the page.

The box-sizing property tells our website how to calculate the width and height properties of a given element.

For example, assume we have two <div> division elements that are 150x150 pixels in size. One has an id of “content-box” and the other with an id of ”border-box”.

If both have the same width and padding and border properties defined, but with a different box-sizing property:
````
#content-box {
 text-align: center;
 background-color: skyblue;
 width: 150px;
 height: 150px;
 padding: 20px;
 border: 2px;
}

#border-box {
 text-align: center;
 background-color: skyblue;
 width: 150px;
 height: 150px;
 padding: 20px;
 border: 2px;
 box-sizing: border-box;
}
````
The rendered output would look similar to this:
<img src="https://www.codedex.io/images/css/exercise-17-content-border-box-comparison.png">
### Comparison of content box and border box

The default value is content-box, which adds the padding and border values to the final width of the element.
However, we can switch this to border-box, and make it so that padding and border are included in the final width, and the element maintains its expected size.
In the element under “Border Box”, the padding and border are factored in the content width. Therefore, the size of the content box will change to maintain that 150px width.

### Instructions
For this exercise, we're going to do one more thing to our Codédex bot license - we're going to reset its box model to border-box!

The border-box model (along with empty padding and margin styles) is commonly applied to all elements at the top of a .css file, with the universal * selector:
````
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
````
Copy and paste this to the top of the styles.css tab, and then select the blue “Run” button to see the difference in how the elements are spaced apart.

You may notice that the posts appear to be left-aligned. This is because the padding for the #post-list element was reset with border-box, and the padding-right property for each item was set to 40px.

Select the #post-list element and give it a padding-left style of 40px to match the style for padding-right.
