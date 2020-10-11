const { test, expect } = require('@jest/globals');
const maskify = require('./7kyu-card-mask');

test('Mask Credit Card numbers', () => {
  expect(maskify('4556364607935616')).toEqual('############5616');

  expect(maskify('64607935616')).toEqual('#######5616');

  expect(maskify('1')).toEqual('1');

  expect(maskify('')).toEqual('');

  expect(maskify('Skippy')).toEqual('##ippy');

  expect(maskify('Nananananananananananananananana Batman!')).toEqual(
    '####################################man!'
  );
});
