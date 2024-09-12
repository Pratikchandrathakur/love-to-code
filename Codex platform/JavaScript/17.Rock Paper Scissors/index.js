// Write code below 💖

let computer = Math.floor(Math.random()*3);
let player=Math.floor(Math.random()*3);

  if(computer==0 && player==1){
    console.log("The Player won!");
  }
  else if(computer==0 && player==2){
    console.log("The Computer won!");
  }
  else if(computer==1 && player==2){
    console.log("The player won!");

  }
  else if(computer==1 && player==0){
    console.log("The Computer won!");
  }
  else if(computer==2 && player==0){
    console.log("The player won!");
  }
  else if(computer==2 && player==1){
    console.log("The computer won!");
  }
  else if (computer==0 && player==0){
    console.log("Game tie");
    
  }else if(computer==1 && player ==1){
    console.log("Game tie");

  }else if(computer==2 && player ==2){
    console.log("Game tie");
  }else{
    console.log("Please try again")
  }
