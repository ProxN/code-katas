/**
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
kata link :https://www.codewars.com/kata/54da5a58ea159efa38000836
 */

const findOddNumber = (A) => {
  const obj = {};
  let oddNumber = 0;
  for (let i = 0; i < A.length; i += 1) {
    obj[A[i]] = obj[A[i]] + 1 || 1;
  }
  Object.keys(obj).forEach((el) => {
    if (obj[el] % 2 === 1) {
      oddNumber = el;
    }
  });
  return +oddNumber;
};

module.exports = findOddNumber;
