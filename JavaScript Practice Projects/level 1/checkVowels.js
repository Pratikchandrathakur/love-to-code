function countVowels(str) {
  let countVowel = 0;
  const vowels = "aeiouAEIOU";

  for (let i = 0; i <= str.length - 1; i++) {
    if (vowels.includes(str[i])) {
      countVowel++;
    }
  }
  return countVowel;
}

const string = "padijahfpihefheiujlz";
console.log(countVowels(string)); // Expected output: Vowel count
