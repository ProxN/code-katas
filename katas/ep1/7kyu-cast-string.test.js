const { test, expect } = require('@jest/globals');
const castString = require('./7kyu-cast-string');

test('Cast string', () => {
  expect(castString(`How can mirrors be real if our eyes aren't real`)).toBe(
    `How Can Mirrors Be Real If Our Eyes Aren't Real`
  );
});
