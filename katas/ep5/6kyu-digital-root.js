/**
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Kata Link: https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
 */

// Solution 1 Using recursive
const digital_root = (n) => {
  if (n <= 9) {
    return n;
  }

  const sum = `${n}`
    .split('')
    .reduce((acc, curr) => parseInt(acc) + parseInt(curr));

  return digital_root(sum);
};

// Solution 2 Using reducer
// const digital_root = (n) => {
//   let sum = `${n}`.split('').reduce((acc, curr) => {
//     const s = parseInt(acc) + parseInt(curr);
//     if (s > 9) {
//       return `${s}`.split('').reduce((a, c) => parseInt(a) + parseInt(c));
//     }
//     return s;
//   }, 0);

//   return sum;
// };

module.exports = digital_root;
