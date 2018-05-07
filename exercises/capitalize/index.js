// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // Make sure to UpperCase first word.
  let result = str[0].toUpperCase()
  // Iterate through the string.
  for (let i = 1; i < str.length; i++) {
    // Whenever the index prior to current index
    // is a ' ' UpperCase the current index.
    if (str[i - 1] === ' ') {
      // UpperCase and add to result.
      result += str[i].toUpperCase()
      // else just add the index to result
    } else {
      result += str[i]
    }
  }
  return result
}

// Solution #1
// function capitalize(str) {
//   const words = []
//   // Iterate over the words
//   for (const word of str.split(' ')) {
//     // UpperCase first index & combine with word - first index.
//     // then push to array.
//     words.push(word[0].toUpperCase() + word.slice(1))
//   }
//   // Join the string back together on ' '
//   return words.join(' ')
// }

module.exports = capitalize
