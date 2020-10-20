/**
 Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

Kata Link: https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
 */

const rowSumOddNumbers = (n) => {
  return Math.pow(n, 3);
};

module.exports = rowSumOddNumbers;
