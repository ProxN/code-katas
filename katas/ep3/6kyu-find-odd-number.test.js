const { test, expect } = require('@jest/globals');
const findOddNumber = require('./6kyu-find-odd-number');

test('find odd number', () => {
  expect(
    findOddNumber([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
  ).toEqual(5);

  expect(findOddNumber([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])).toEqual(-1);

  expect(findOddNumber([10])).toEqual(10);

  expect(findOddNumber([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])).toEqual(5);
});
