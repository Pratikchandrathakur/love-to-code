We're going to learn more about the while loop in the next exercise. But for now, we are going to demonstrate how it works by mimicking the classic game of Duck Duck Goose.

In the game, a player walks around a circle of peers to pat each of their heads. They will either say "Duck" or "Goose". If they say "Goose", the player is chased around the circle by the person they patted, to be tagged. After the person tags the player, it is their turn to walk around the circle.

In a file called duck-duck-goose.js, let's copy and paste the following:

let randomNumber = Math.floor(Math.random() * 10);

while (randomNumber != 7) {
  console.log("Duck 🦆");
  randomNumber = Math.floor(Math.random() * 10);
}

console.log("Goose! 🦢");

Afterward, run this code and observe what's printed to the terminal.
