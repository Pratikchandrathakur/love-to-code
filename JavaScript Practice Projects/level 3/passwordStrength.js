// Write code below 💖

function isStrongPassword(password) {
  const number = "1234567890";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlpha = alphabet.toUpperCase(); // Get uppercase letters
  const lowerAlpha = alphabet; // Lowercase letters

  let hasNumber = false;
  let hasLowerCase = false;
  let hasUpperCase = false;

  // Check password length
  if (password.length <= 8) {
    return "Please change your password soon! It must be more than 8 characters.";
  }

  // Check for characters
  for (let i = 0; i < password.length; i++) {
    if (number.includes(password[i])) {
      hasNumber = true;
    } else if (lowerAlpha.includes(password[i])) {
      hasLowerCase = true;
    } else if (upperAlpha.includes(password[i])) {
      hasUpperCase = true;
    }
  }

  // Final strength check
  if (hasNumber && hasLowerCase && hasUpperCase) {
    return "Your Password is Strong Enough";
  } else {
    return "Please change your password soon! It must include a number, an uppercase letter, and a lowercase letter.";
  }
}

// Example usage
const passwordCheck = isStrongPassword("Hellobrother12");
console.log(passwordCheck); // Outputs: "Your Password is Strong Enough"
console.log(isStrongPassword("Hellobrother12")); // Outputs: "Your Password is Strong Enough"
console.log(isStrongPassword("hellobrother"));    // Outputs: "Please change your password soon! ..."
console.log(isStrongPassword("12345678"));        // Outputs: "Please change your password soon! ..."
console.log(isStrongPassword("Password1"));       // Outputs: "Your Password is Strong Enough"
console.log(isStrongPassword("short1"));          // Outputs: "Please change your password soon! ..."
