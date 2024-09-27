// Write code below 💖

function isPalindrome(word) {
  let arr = word.toLowerCase().split(""); // Note the missing quotes around the split argument
  for (let i = 0; i < arr.length; i++) { // Corrected the syntax for the for loop
    if (arr[i] !== arr[arr.length - 1 - i]) { // Fixed the comparison condition
      return "It's not a palindrome"; // Corrected the return message
    }
  }
  return "It is a palindrome"; // Moved this line outside the loop
}

console.log(isPalindrome("racecar")); // Example usage
