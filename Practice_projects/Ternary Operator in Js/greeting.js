const hour = 14; // 2 PM
const greeting = (hour < 12) ? "Good morning!" : (hour < 18) ? "Good afternoon!" : "Good evening!";
console.log(greeting);
