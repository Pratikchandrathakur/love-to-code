// 🔢 Fibonacci Sequence-->Hard
// There's strength in numbers, but there's also beauty in them!

// The Fibonacci sequence is a special list of numbers where each one is the sum of the two previous numbers (after 0 and 1):

// 0,1,1,2,3,5,8,13,21,34
// Examples of the sequence are found in nature, including tree branches and pine cone scales. 🌲

// Use a for loop to log the first 10 Fibonacci numbers.

// The first two numbers, 0 and 1, can be saved to firstFib and secondFib variables and logged directly to the console. Use a loop to generate a nextFib variable for the next Fibonacci number.

// Note: Inside the loop, make sure to properly reassign firstFib and secondFib after generating the next number.

// Write code below 💖
let firstFib=0
let secondFib=1
console.log(firstFib)
console.log(secondFib)
for(let i=2;i<10;i++){
  let nextFib=firstFib+secondFib
  firstFib=secondFib
  secondFib=nextFib
  console.log(nextFib)
}
