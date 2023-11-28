const res = require('./script');

test('12 and 5 should return 7', () => {
  let result = res(12,5);
  expect(result).toBe(7);
})
