function isStrongPassword(password) {
  let hasNumber = false;
  let hasLowerCase = false;
  let hasUpperCase = false;

  // Check password length
  if (password.length <= 8) {
    return "Please change your password soon! It must be more than 8 characters.";
  }

  // Check for characters in one pass
  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    if (char >= '0' && char <= '9') {
      hasNumber = true;
    } else if (char >= 'a' && char <= 'z') {
      hasLowerCase = true;
    } else if (char >= 'A' && char <= 'Z') {
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

console.log(isStrongPassword("Hellobrother12")); // Outputs: "Your Password is Strong Enough"
console.log(isStrongPassword("hellobrother"));    // Outputs: "Please change your password soon! ..."
console.log(isStrongPassword("12345678"));        // Outputs: "Please change your password soon! ..."
console.log(isStrongPassword("Password1"));       // Outputs: "Your Password is Strong Enough"
console.log(isStrongPassword("short1"));          // Outputs: "Please change your password soon! ..."
