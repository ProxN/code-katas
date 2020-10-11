const { test, expect } = require('@jest/globals');
const findSortest = require('./7kyu-shortest-word');

test('Find shortest word tests', () => {
  expect(
    findSortest('bitcoin take over the world maybe who knows perhaps')
  ).toEqual(3);

  expect(
    findSortest(
      'turns out random test cases are easier than writing out basic ones'
    )
  ).toEqual(3);
});
