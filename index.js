// Function to check if the given word is a palindrome
function isPalindrome(word) {
  let start = 0;
  let end = word.length - 1;

  // Compare characters from both ends until start pointer is less than end pointer
  while (start < end) {
    // If characters at start and end are not equal, the word is not a palindrome
    if (word[start] !== word[end]) {
      return false;
    }

    // Move the pointers towards the middle
    start++;
    end--;
  }

  // If the loop completes, the word is a palindrome
  return true;
}

// Test Cases
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("robot")); // Output: false

/* 
  Pseudocode:

  isPalindrome(word):
    start = 0
    end = length of word - 1

    while start < end:
      if word[start] is not equal to word[end]:
        return false

      increment start
      decrement end

    return true

  Explanation:

  1. The function starts with two pointers, start and end, initialized to the beginning and end of the string word, respectively.
  2. It enters a while loop that continues as long as the start pointer is less than the end pointer.
  3. In each iteration, the function compares the character at the start pointer with the character at the end pointer. If they are not equal, it means the string is not a palindrome, and the function immediately returns false.
  4. If the characters are equal, it increments the start pointer and decrements the end pointer to move towards the middle of the string for the next comparison.
  5. The loop continues until the start and end pointers meet in the middle. If the loop completes without finding different characters, the string is a palindrome, and the function returns true.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
