// 💪 Fitness Routine-->Hard
// Exercising and having a fitness routine is so important for our health and quality of life. These days, there are so many kinds of exercises that it can be a lil' intimidating to start.

// Why don't we use conditionals and random numbers to help us pick an exercise and make it fun?

// Create a randomNumber variable that generates a random number between 0 and 3.

// Use a conditional statement to log one of the following:

// 0: "10 Push-ups"
// 1: "10 Sit-ups"
// 2: "10 Squats"
// 3: "10 Jumping Jacks"
// When you're done, make sure to do the fitness challenge! 🔥

// Write code below 💖
const randomNumber=Math.floor(Math.random()*4);
if (randomNumber==0){
  console.log("10 Push-ups");
}
else if(randomNumber==1){
  console.log("10 Sit-ups");
}
else if(randomNumber==2){
  console.log("10 Squats");
}
else if(randomNumber==3){
  console.log("10 Jumping Jacks");
}
else{
  console.log("Check this exercise is not a part of the challenge");
}

