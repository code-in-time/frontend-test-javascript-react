import { getRandomNumber } from './helpers';

test('Should get a random number greater or equal to 1', () => {
  expect(getRandomNumber(87)).toBeGreaterThanOrEqual(1);
});

test('Should get a random number less than or equal to 87', () => {
  expect(getRandomNumber(87)).toBeLessThanOrEqual(87);
});