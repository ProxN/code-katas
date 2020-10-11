const { test, expect } = require('@jest/globals');
const endWith = require('./7kyu-end-with');

test('Find shortest word tests', () => {
  expect(endWith('abcd', 'cd')).toBe(true);

  expect(endWith('abcde', 'cd')).toBe(false);

  expect(endWith('abccde', 'cde')).toBe(true);
});
