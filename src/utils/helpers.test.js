import { getRandomNumber } from './helpers';

test('Should get a random number greater or equal to 1', () => {
  expect(getRandomNumber(5)).toBeGreaterThanOrEqual(1);
});

test('Should get a random number less than or equal to 5', () => {
  expect(getRandomNumber(5)).toBeLessThanOrEqual(5);
});
