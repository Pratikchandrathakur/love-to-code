// Write code below 💖

function greetings(){
  const randomNumber=Math.floor(Math.random()*4)+1;
  if (randomNumber == 1){
    console.log("Howdy!");
  } else if (randomNumber == 2) {
    console.log("Hi there!");
  } else if (randomNumber == 3) {
    console.log("Hey what's happening?");
  } else if (randomNumber == 4) {
    console.log("Hola!");
  } else {
    console.log("Heya!");
  }
}

greetings();
greetings();
greetings();
