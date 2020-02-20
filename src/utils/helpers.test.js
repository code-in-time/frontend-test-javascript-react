import { getRandomNumber } from './helpers';

test('Should get a random number greater or equal to 1 and less than or equal to 5', () => {
  // Generate 10 random numbers
  const n1 = getRandomNumber(5);
  const n2 = getRandomNumber(5);
  const n3 = getRandomNumber(5);
  const n4 = getRandomNumber(5);
  const n5 = getRandomNumber(5);
  const n6 = getRandomNumber(5);
  const n7 = getRandomNumber(5);
  const n8 = getRandomNumber(5);
  const n9 = getRandomNumber(5);
  const n10 = getRandomNumber(5);
  // Test greater or equal to 1
  expect(n1).toBeGreaterThanOrEqual(1);
  expect(n2).toBeGreaterThanOrEqual(1);
  expect(n3).toBeGreaterThanOrEqual(1);
  expect(n4).toBeGreaterThanOrEqual(1);
  expect(n5).toBeGreaterThanOrEqual(1);
  expect(n6).toBeGreaterThanOrEqual(1);
  expect(n7).toBeGreaterThanOrEqual(1);
  expect(n8).toBeGreaterThanOrEqual(1);
  expect(n9).toBeGreaterThanOrEqual(1);
  expect(n10).toBeGreaterThanOrEqual(1);
  // Test less than or equal to 5
  expect(n1).toBeLessThanOrEqual(5);
  expect(n2).toBeLessThanOrEqual(5);
  expect(n3).toBeLessThanOrEqual(5);
  expect(n4).toBeLessThanOrEqual(5);
  expect(n5).toBeLessThanOrEqual(5);
  expect(n6).toBeLessThanOrEqual(5);
  expect(n7).toBeLessThanOrEqual(5);
  expect(n8).toBeLessThanOrEqual(5);
  expect(n9).toBeLessThanOrEqual(5);
  expect(n10).toBeLessThanOrEqual(5);
});
