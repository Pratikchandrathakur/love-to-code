# 10. Jokebook
# Chaining Promises
Before ES6 was released, callbacks were pretty much all we had for doing asynchronous operations. But if we want to do more than one thing, we'd have to nest more than one callback function to make it work.

Imagine you've placed an order for lunch at your favorite spot:
```
function prepareOrder(callback) {
  const result = "Preparing order 🧑‍🍳";
  callback(result);
}

function serveOrder(result, callback) {
  const result2 = `${result}, and now serving. Enjoy! 🍲`;
  callback(result2)
}

// Calling the operations
prepareOrder(function(result) {
  serveOrder(result, function(result2) {
    console.log(result2);
  });
});
```
This may not seem bad with just two steps. But if more steps were added, then there would be more callbacks. At a certain point, this becomes unreadable.

We can use promises to write out these async operations, with callbacks in a cleaner way. Enter chaining.

Chaining promises uses the .then() and .catch() to work with async data in multiple steps:
```
function prepareOrder() {
  return new Promise((resolve) => {
    const result = "Preparing order 🧑‍🍳";
    resolve(result);
  })
}

function serveOrder(result) {
  return new Promise((resolve) => {
    const result2 = `${result}, and now serving. Enjoy! 🍲`;
    resolve(result2);
  })
}

prepareOrder()
  .then((result) => serveOrder(result))
  .then((result2) => {
    console.log(result2)
  })
  .catch((error) => {
    console.log("Error:", error);
  })
```
Two major changes, but the second one is even more interesting:

First, our two defined functions now return new Promise objects that resolve with some result string.
We "chained together" our function calls with .then() and .catch().
In .then(), you pass the next step you want to take with the promise data you have. Next, you have the .catch() statement that handles any rejected promise data.

# Fetching Data
When we want to work with data outside our program, one way to do it is by fetching it from another computer. In JS, this is done with the following function:
```
fetch(url);
```
This fetch() function accepts a url argument. If it's a valid URL, this function returns a promise object with resolved data.

Many APIs (or application programming interfaces) offer URLs for public use. Some are free while some aren't. This course will use free ones!

Here is an example of fetching from a free Dog API:
```
fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error()
```
When working with fetched data, it has to go through at least two .then() calls:

The first converts the data into JSON, an object-centered format that can be used in JS.
The second lets us access and use the data.
