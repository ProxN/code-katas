const { test, expect } = require('@jest/globals');
const friendFoe = require('./7kyu-friend-foe');

test('Find shortest word tests', () => {
  expect(friendFoe(['Ryan', 'Kieran', 'Mark'])).toEqual(['Ryan', 'Mark']);

  expect(friendFoe(['Ryan', 'Jimmy', '123', '4', 'Cool Man'])).toEqual([
    'Ryan',
  ]);

  expect(friendFoe(['Love', 'Your', 'Face', '1'])).toEqual([
    'Love',
    'Your',
    'Face',
  ]);
});
