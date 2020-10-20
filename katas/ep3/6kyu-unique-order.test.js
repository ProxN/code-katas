const { test, expect } = require('@jest/globals');
const uniqueOrder = require('./6kyu-unique-order');

test('Unique order', () => {
  expect(uniqueOrder('AAAABBBCCDAABBB')).toEqual([
    'A',
    'B',
    'C',
    'D',
    'A',
    'B',
  ]);

  expect(uniqueOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);

  expect(uniqueOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
});
