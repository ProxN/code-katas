/**
 * Check to see if a string has the same amount of 'x's and 'o's.
 The method must return a boolean and be case insensitive. The string can contain any char.

 kata link: https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
 */

// solution 1 using For loop
// const XO = (str) => {
//   const arr = [...str];
//   let xCount = null;
//   let oCount = null;

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i].toLowerCase() === 'x') {
//       xCount += 1;
//     }
//     if (arr[i].toLowerCase() === 'o') {
//       oCount += 1;
//     }
//   }
//   return xCount === oCount;
// };

// solution 2 using Reduce

const XO = (str) => {
  const { x, o } = [...str.toLowerCase()].reduce(
    (acc, curr) =>
      curr === 'x' || curr === 'o' ? { ...acc, [curr]: acc[curr] + 1 } : acc,
    { x: 0, o: 0 }
  );
  return x === o;
};

module.exports = XO;
