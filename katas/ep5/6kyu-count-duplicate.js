/**
 Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic 
characters and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Kata Link:https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
 */

const count_duplicate = (text) => {
  const arr = [];
  const obj = {};
  for (let i = 0; i < text.length; i += 1) {
    const ex = arr.indexOf(text[i].toLowerCase());
    if (ex > -1) {
      obj[arr[ex]] = true;
    } else {
      arr.push(text[i].toLowerCase());
    }
  }
  return Object.keys(obj).length;
};

module.exports = count_duplicate;
