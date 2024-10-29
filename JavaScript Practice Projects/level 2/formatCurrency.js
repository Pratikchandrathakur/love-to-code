function formatCurrency(value) {
  // Check if the value is a number
  if (typeof value !== 'number') {
    return "Invalid input";
  }
  
  // Format the number to two decimal places
  return `$${value.toFixed(2)}`;
}

const currencyDollar = formatCurrency(15434.56);
console.log(currencyDollar); // Outputs: $15434.56
