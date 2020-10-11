const { test, expect } = require('@jest/globals');
const xo = require('./7kyu-xo');

test('Check string if have same amount of x & o', () => {
  expect(xo('ooxx')).toBe(true);

  expect(xo('xooxx')).toBe(false);

  expect(xo('ooxXm')).toBe(true);

  expect(xo('zpzpzpp')).toBe(true);

  expect(xo('zzoo')).toBe(false);
});
