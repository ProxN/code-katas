const { test, expect } = require('@jest/globals');
const sumoddNumbers = require('./7kyu-sum-odd-numbers');

test('Sum odd numbers', () => {
  expect(sumoddNumbers(1)).toEqual(1);

  expect(sumoddNumbers(2)).toEqual(8);

  expect(sumoddNumbers(3)).toEqual(27);
});
