// Write code below 💖
let limit=50;
let a=0;
let b=1;
while(a<=limit){
  console.log(a);
  let temp=a+b;
  a=b;
  b=temp;
}

/* Output:
0,1,1,2,3,5,8,13,21,34
} */
