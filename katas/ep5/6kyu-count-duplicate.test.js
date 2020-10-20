const { test, expect } = require('@jest/globals');
const CountDuplicate = require('./6kyu-count-duplicate');

test('Sum of Digits / Digital Root', () => {
  expect(CountDuplicate('abbccd')).toEqual(2);

  expect(CountDuplicate('aaabcde')).toEqual(1);

  expect(CountDuplicate('aabbccddee')).toEqual(5);
});
