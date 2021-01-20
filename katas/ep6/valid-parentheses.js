/**
Write a function called that takes a string of parentheses, 
and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Link: https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
 */

const validParentheses = (parens) => {
  const arr = parens.split('');
  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '(') {
      count += 1;
    }
    if (arr[i] === ')') {
      count -= 1;
    }
  }
  return count === 0 ? true : false;
};

module.exports = validParentheses;
