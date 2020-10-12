/**

Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

*/

const moveZeros = (arr) => {
  const withOutZeros = [];
  let ZeroCount = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 0) {
      ZeroCount += 1;
    } else {
      withOutZeros.push(arr[i]);
    }
  }
  for (let i = 0; i < ZeroCount; i += 1) {
    withOutZeros.push(0);
  }
  return withOutZeros;
};

module.exports = moveZeros;
