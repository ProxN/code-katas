const { test, expect } = require('@jest/globals');
const Multiples = require('./6kyu-multiof-3-5');

test('Multiples of 3 or 5', () => {
  expect(Multiples(10)).toEqual(23);

  expect(Multiples(100)).toEqual(2318);
});
