/**
Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

link:https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
 */

// Method 1

// const pigIt = (str) => {
//   const arr = str.split(' ');
//   const newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     const value = arr[i].slice(1) + arr[i][0] + 'ay';
//     newArr.push(value);
//   }

//   return newArr.join(' ');
// };

const pigIt = (str) => {
  return str
    .split(' ')
    .map((el) => (/[_\W]/.test(el) ? el : el.slice(1) + el[0] + 'ay'))
    .join(' ');
};

module.exports = pigIt;
