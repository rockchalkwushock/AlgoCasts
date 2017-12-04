// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  if (typeof str !== 'string') return 1
  // REVIEW Solution #1
  // return str.split('').reverse().join('')

  // REVIEW Solution #2
  // let reversed = ''
  // for (let char of str) {
  //   reversed = char + reversed
  // }
  // return reversed

  // REVIEW Solution #3
  return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;
