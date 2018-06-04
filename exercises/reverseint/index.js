// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const intArr = n.toString().split('').reverse().join('')
  // Math.sign(intArr)

  // if (n < 0) {
  //   return parseInt(intArr) * -1
  // }
  // return parseInt(intArr)

  return parseInt(intArr) * Math.sign(n)
}

module.exports = reverseInt;


// toString
// math.sign(x)
