const { test, expect } = require('@jest/globals');
const sumoddNumbers = require('./7kyu-sum-odd-numbers');

test('Find shortest word tests', () => {
  expect(sumoddNumbers(1)).toEqual(1);

  expect(sumoddNumbers(2)).toEqual(8);

  expect(sumoddNumbers(3)).toEqual(27);
});
