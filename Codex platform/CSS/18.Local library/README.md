# 18. Local Library
## Congrats!

### We've made it to the final exercise of this chapter! 🎉

Let's recap what was learned about the box model:

It describes the layers of boxes that surround each element on the page.
The padding box is directly outside of the content.
The border box is the outer edge of an element, and can be rounded or made visible.
The margin box separates an element from other elements.
There are two box-sizing modes, content-box and border-box, that determine how elements are sized by the width and height properties.
In this final exercise, we're going to use our knowledge of the box model to style a homepage for a library. 📚

Instructions
Inside an index.html file, add the following code:
````
<!DOCTYPE html>
<html lang="en">
<head>
 <link href="styles.css" rel="stylesheet" />
 <title>Library</title>
</head>
<body>
 <header>
 </header>
 <nav>
   <h1>Welcome to the Library!</h1>
   <a class="nav-item" href="#welcome">Home</a>
   <a class="nav-item" href="#catalog-form">Search</a>
   <a class="nav-item" href="#staff-picks">Staff Picks</a>
 </nav>
 <main>
   <section id="welcome">
     <p>
       Guided by our dedication to literacy and learning and patron-focused services and programs, the Library is a fun space for using information and technology to build knowledge and foster community, social connection.
     </p>
   </section>
   <section id="catalog">
     <form id="catalog-form">
       <input id="catalog-input" type="text" placeholder="Search the Catalog..."/>
       <input id="form-btn" type="submit" value="Search" />
     </form>
   </section>
   <section id="staff-picks">
     <h2>Staff Picks</h2>
     <div class="staff-pick-row">
       <a><img class="staff-pick-img" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442129426i/231804.jpg" alt="The Outsiders by S.E. Hinton" /></a>
       <a><img class="staff-pick-img" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1457284880i/27220736.jpg" alt="Shoe Dog by Phil Knight"/></a>
       <a><img class="staff-pick-img" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1444887454i/26451798.jpg" alt="Make: Getting Started with p5.js by Lauren McCarthy, Casey Reas, & Ben Fry" /></a>
     </div>
     <div class="staff-pick-row">
       <a><img class="staff-pick-img" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586529806i/43599070.jpg" alt="The Courage to be Happy by Ichiro Kishimi & Fumitake Koga" /></a>
       <a><img class="staff-pick-img" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg" alt="The Hobbit by J.R.R. Tolkien" />
       <img class="staff-pick-img" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386924362i/216088.jpg" alt="Ripley's Believe It or Not!"/></a>
     </div>
   </section>
 </main>
</body>
</html>
````
For the styles.css file, paste the following default styles at the top:
````
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}

header {
  background-image: url('https://cdn.pixabay.com/photo/2020/07/23/01/29/books-5430104_1280.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
}
````
Next, let's do the following:

- Select the h1 heading element and add a margin to the top and bottom.
- Select elements with the nav-item class, add a width of 33%, and style with at least:
  - A display of inline-block.
  - A border with a thickness and color.
  - A border-radius of 5px.
  - A padding of 5px.
  - A margin of 10px.
- Add 20px of margin on top of the main element.
- Add 10px of margin to the top and bottom of the section elements.
- Select #welcome > p, center-align the text, and add 5em of margin to the left and right side of this element.
- Select both the #catalog-input and #form-btn elements, and:
  - Center-align the text.
  - Add a font-size of 1.25rem and a font-weight of 800.
  - Add 8px to the padding property.
- In just the #catalog-input element, add a border that is solid and 2px-thick, as well as a width of 37.5%.
- Center-align the text in the #staff-picks element.
- Select all elements with a class of .staff-pick-img and add the following:
  - A border that is solid and 1px-thick.
  - A border-radius of 0 7px 7px 0.
  - A width of 10em and a height of 15em.<br>
- Save the files and open the index.html file to view the page. Don't forget to screenshot your work and share on Twitter!
