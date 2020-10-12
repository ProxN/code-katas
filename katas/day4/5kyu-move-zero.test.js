const { test, expect } = require('@jest/globals');
const moveZeros = require('./5kyu-move-zero');

test('Move zeros', () => {
  expect(moveZeros([0, 1, 1, 1, 2, 0, 0, 5, 4])).toEqual([
    1,
    1,
    1,
    2,
    5,
    4,
    0,
    0,
    0,
  ]);

  expect(moveZeros([1, 2, 2, 0, 3, 3])).toEqual([1, 2, 2, 3, 3, 0]);
});
