// Write code below 💖

let myNumber=10;
let binary="";
while(myNumber>0){
  if(myNumber%2==0){
    binary=binary+"0";
  }else{
    binary=binary+"1";
  }
  
  myNumber=Math.floor(myNumber/2);
  if(myNumber==0){
      binary=binary+"0"
    }
}
console.log(binary);
