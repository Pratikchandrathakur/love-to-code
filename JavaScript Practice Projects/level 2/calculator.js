function calculator(num1, num2, operation) {
  if (operation == "+") {
    return num1 + num2;
  } else if (operation == "-") {
    return num1 - num2;
  } else if (operation == "*") {
    return num1 * num2;
  } else if (operation == "/") {
    return num1 / num2;
  } else {
    return "Invalid input";
  }
} // Closing the function here

let calculate = calculator(4, 3, "*"); // Calling the function
console.log(calculate); // Outputs: 12
