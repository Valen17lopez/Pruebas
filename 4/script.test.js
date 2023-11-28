const sum = require('./script');

test('12 and 5 should return 17', () => {
  let result = sum(12,5);
  expect(result).toBe(17);
})
