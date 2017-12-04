// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  if (typeof str !== 'string') return 1
  // REVIEW Solution #1
  // return str === str.split('').reverse().join('')
  // REVIEW Solution #2
  // Iterates over the entire array, does not need to.
  return str.split('').every((char, i) => char === str[str.length - i - 1] )
}

module.exports = palindrome;
