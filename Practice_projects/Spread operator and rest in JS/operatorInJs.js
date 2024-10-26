// Define planVacation() here 💖
function planVacation(destinationOne, destinationTwo, ...otherDestinations) {
  // Create an array of all destinations starting with destinationOne and destinationTwo
  const destinations = [destinationOne, destinationTwo, ...otherDestinations];
  
  // Return the array of destinations
  return destinations;
}

// Execute the function with a sample list of destinations
const vacationPlan = planVacation("Paris", "Tokyo", "New York", "Sydney", "Cape Town");

// Log the results to the console
console.log(vacationPlan);
