// Write code below 💖

let answer=["Yes - definitely.","It is decidedly so.","Without a doubt.","Reply hazy, try again."
,"Ask again later.","Better not tell you now.","My sources say no.","Outlook not so good.","Very doubtful."]

let question=Math.floor(Math.random()*10);
if (question==1){
  console.log(`Question:${question} /n Magic 8 Ball:${answer[0]}`);
} else if(question==2){
  console.log(`Question:${question} /n Magic 8 Ball:${answer[1]}`);
} else if(question==3){
  console.log(`Question:${question} /n Magic 8 Ball:${answer[2]}`);
}else if(question==4){
  console.log(`Question:${question} /n Magic 8 Ball:${answer[3]}`);
} else if(question==5){
  console.log(`Question:${question} /n Magic 8 Ball:${answer[4]}`);
} else if(question==6){
  console.log(`Question:${question} /n Magic 8 Ball:${answer[5]}`);
} else if (question==7){
  console.log(`Question:${question} \n Magic 8 Ball:${answer[6]}`);
} else if(question==8){
  console.log(`Question:${question} \n Magic 8 Ball:${answer[7]}`);
}else{
  console.log(`Question:${question} \n Magic 8 Ball: ${answer[8]}`);
}

