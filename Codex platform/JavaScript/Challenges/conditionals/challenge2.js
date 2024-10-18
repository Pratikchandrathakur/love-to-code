// 🌟 Michelin Stars -->Easy
// Many restaurants aspire to be awarded a Michelin star for their food. While getting the max 3 stars is extraordinary, even getting 1 star can change the fate of a restaurant.

// There're only 153 restaurants with 3 stars in the world. 😮

// Let's create a system to award Michelin stars.

// Define a rating variable as a number between 1 and 3, and log one of the following based on the number:

// "🌟 is worth walking to."
// "🌟🌟 is worth driving to."
// "🌟🌟🌟 is worth flying to."
// All other cases, log "Invalid."

// Write code below 💖

const rating=2;

if(rating===1){
  console.log("🌟 is worth walking to.")
}else if(rating===2){
  console.log("🌟🌟 is worth driving to.")
}else if(rating===3){
  console.log("🌟🌟🌟 is worth flying to.")
}else{
  console.log("Invalid.")
}
