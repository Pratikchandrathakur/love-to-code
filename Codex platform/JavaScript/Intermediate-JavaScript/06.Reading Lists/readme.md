# Instructions
Goodreads is a popular resource for keeping track of the books you read. Let's imitate this with ES6! 📖

Define a goodreadsInfo object with the following structure:
```
const goodreadsInfo = {
  currentlyReading: [
    {
      title: "",
      author: ""
    }
  ],

  wantToRead: [
    {
      title: "",
      author: ""
    }
  ]
}
```
Add at least one book object (with a title and author) to each array.

## addNewBooks() Function
This part tests our knowledge of the spread and rest operators.

Define an addNewBooks() arrow function with the following parameters:

A books array of strings.
An optional additionalBookObjects array.
This function should return a new array that includes all items from books along with any items from the additionalBookObjects array.

Then, use this function on at least one of the lists from the goodreadsInfo object, like so:

goodreadsInfo.currentlyReading = addNewBooks(goodreadsInfo.currentlyReading, /* new books here */);

## showGoodreadsInfo() Function
This part tests our knowledge of loops and template literals.

Define a showGoodreadsInfo() function that accepts a single info parameter.

Inside, create two variables representing the reading list arrays from the info parameter.

Then, use a combination of console.log() statements, for...of loops, and template literals to output our reading lists to the console.

Lastly, execute the showGoodreadsInfo() function. The output should look similar to this:

Currently Reading:
The Hobbit by J.R.R. Tolkien
The Two Towers by J.R.R. Tolkien
The MOM Test by Rob Fitzpatrick

Want to Read:
The Art of Language Invention by David Peterson
Looking for Alaska by John Green
