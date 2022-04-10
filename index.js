function reverse(word) {
  const arrayWord = word.split(``)
  const reversedArrayWord = arrayWord.reverse()
  const reversedWord = reversedArrayWord.join(``)
  return reversedWord
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word)
  if (word === reversedWord) {
    return true
  }
  else { return false }
}

/* 
  Add your pseudocode here
  The string should be reversed
  if the string is spelled the same reversed, it is a paildrome and should return true
  else it should return false
*/

/*
  Add written explanation of your solution here
  We are taking a string with our isPalindrome function and if the word is a palindrome it returns true, if it isn't, it will return false. The reverse funtion is what makes this possible, is taking the string and turning it into an array, then splitting each letter into part of that array. From there, we are reversing the letters, then joining it back into a string. This way the other function can read whether or not the word is a palidrome.
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
