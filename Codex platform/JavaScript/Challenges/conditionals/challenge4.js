// ⌛ Decades-->Medium
// For most of the 20th century, various trends and world events gave each decade its own "personality". In American history, for example, the period from 1920 to 1929 is remembered as the "Roaring Twenties."

// Here's a breakdown of nicknames for some major decades:

// Time Period	Nickname
// 1920 - 1929	Roaring Twenties
// 1930 - 1939	Dirty Thirties
// 1940 - 1949	Fighting Forties
// 1950 - 1959	Fabulous Fifties
// 1960 - 1969	Swinging Sixties
// Define a year variable with a 4-digit number, and use conditional statements to log the nickname based on it.

// For example, if year is set to 1963, the output would be:

// Swinging Sixties

// If the value of year doesn't fall into any of these decades, then log "Year out of range".

// Write code below 💖

const year=1966
if(year>=1920 && year<=1929){
  console.log("Roaring Twenties");
}
else if (year>=1930 && year<=1939){
  console.log("Dirty Thirties");
}
else if(year>=1940 && year<=1949){
  console.log("Fighting Forties");
}
else if (year>=1950 && year<=1959){
  console.log("Fabulous Fifties");
}
else if (year>=1960 && year<=1969){
  console.log("Swinging Sixties");
}
else{
  console.log("Year out of range");
}
