// Write code below 💖
const luckynumber=7;
let guess=Math.floor(Math.random()*10)+1;

while(guess !=luckynumber){
  console.log(`Nope, it isn't ${guess}`)
  guess=Math.floor(Math.random()*10)+1;
}
console.log(`the luckynumber is ${guess}!`);
