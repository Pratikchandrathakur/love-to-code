// 🎟️ Swag Raffle-->Medium
// We are running a swag raffle in the Codédex community and need to return 10 of the same number by picking random numbers between 0 - 99. 🏆

// Define a count variable at 0 and a targetNumber that is randomly set between 0 and 99.

// Run a while loop until count is equal to 10. Inside the loop, set a drawNumber variable to a random number between 0 and 99.

// If drawNumber is equal to targetNumber, increment the count by 1 and log "Match".
// Otherwise, do not increment the count and log "No Match".
// Outside the loop, log a message indicating the targetNumber was drawn 10 times:

// The number 7 was found 10 times.

// Write code below 💖

let count = 0;
let targetNumber = Math.floor(Math.random() * 100); // Random number between 0 and 99

while (count != 10) {
  let drawNumber = Math.floor(Math.random() * 100); // Draw a random number between 0 and 99
  
  if (drawNumber===targetNumber  ) {
    console.log("Match");
    count++;
  } else {
    console.log("No Match");
  }
}

console.log(`The number ${targetNumber} was found ${count} times.`);
