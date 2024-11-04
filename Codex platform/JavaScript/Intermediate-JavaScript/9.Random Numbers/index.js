// Define randomNumberPromise() function 💖
const randomNumberPromise = () => {
  // Create a new Promise
  return new Promise((resolve, reject) => {
    // Generate a random number between 1 and 10
    const randomNum = Math.floor(Math.random() * 10) + 1;
    
    // Resolve or reject based on the number
    if (randomNum < 5) {
      resolve(`Success! The number ${randomNum} is less than 5.`);
    } else {
      reject(`Failure! The number ${randomNum} is 5 or greater.`);
    }
  });
};

// Get the button element and add an event listener
const generateBtn = document.getElementById("generateButton");

generateBtn.addEventListener("click", () => {
  randomNumberPromise()
    .then(message => console.log(message))   // Handle success
    .catch(error => console.error(error));   // Handle failure
});
