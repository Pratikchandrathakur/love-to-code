function countVowels(str) {
  let countVowel = 0; // Declare count inside the function
  const vowels = "aeiouAEIOU"; // Define vowels inside the function

  for (let i = 0; i <= str.length - 1; i++) { // Corrected for loop syntax
    if (vowels.includes(str[i])) { // Corrected if statement syntax
      countVowel++;
    } else {
      console.log("Something unusual happened!");
    }
  }
  return countVowel;
}

const string = "padijahfpihefheiujlz";
console.log(countVowels(string)); // Expected output: Vowel count
