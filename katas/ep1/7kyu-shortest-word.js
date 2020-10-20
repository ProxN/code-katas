/**
 * Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.

codewars link : https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
 */

// solution 1 using reduce
const findShort = (s) => {
  return s
    .split(' ')
    .reduce((acc, curr) => (acc.length < curr.length ? acc : curr)).length;
};

// solution 2 using reduce
// const findShort = (s) => {
//   const arr = s.split(' ');
//   let shortestWord = arr[0];
//   for (let i = 1; i < arr.length; i += 1) {
//     if (arr[i].length < shortestWord.length) {
//       shortestWord = arr[i];
//     }
//   }
//   return shortestWord.length;
// };

module.exports = findShort;
