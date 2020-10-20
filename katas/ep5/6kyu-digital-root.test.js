const { test, expect } = require('@jest/globals');
const DigitalRoot = require('./6kyu-digital-root');

test('Sum of Digits / Digital Root', () => {
  expect(DigitalRoot(16)).toEqual(7);

  expect(DigitalRoot(29)).toEqual(2);

  expect(DigitalRoot(456)).toEqual(6);
});
