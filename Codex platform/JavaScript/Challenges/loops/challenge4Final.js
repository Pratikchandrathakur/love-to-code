// 🎲 Dice Doubles-->Medium
// If you roll two dice, the chance that both of them come up with the same value is slightly less than 17%. 🎲 🎲

// Let's simulate this with loops!

// Start with two variables, die1 and die2, each set with a random value between 1 and 6.

// Let's track the dice rolls by initializing a numberOfRolls at 0.

// Now, let's use a while loop that runs as long as our die1 is not equal to die2. When they're not equal, increment numberOfRolls and reset the die1 and die2 to a new random number between 1 and 6.

// When you roll double values, the loop should stop and the output should look like this:

// Roll 1: 2
// Roll 2: 5
// Roll 1: 1
// Roll 2: 1
// Number of rolls: 1

// Note: Make sure to use console.log() to match the output shown above.



// Start with two random dice rolls between 1 and 6
let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;

let numberOfRolls = 0;

// Loop as long as die1 is not equal to die2
while (die1 !== die2) {
  // Roll the dice again by generating new random values
  die1 = Math.floor(Math.random() * 6) + 1;
  die2 = Math.floor(Math.random() * 6) + 1;

  console.log(`Roll 1: ${die1}`);
  console.log(`Roll 2: ${die2}`);
  
  numberOfRolls += 1;  // Increment the roll count
}

// Output the final matching roll and number of rolls
console.log(`Number of rolls: ${numberOfRolls}`);
