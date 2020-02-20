import { getRandomNumber, pickTwoUniqueNumbers } from './helpers';

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

test('Should pick two unique numbers that are not equal and are from 1 to 5', () => {
  // Generate 10 random number pairs
  const a = pickTwoUniqueNumbers(5);
  const b = pickTwoUniqueNumbers(5);
  const c = pickTwoUniqueNumbers(5);
  const d = pickTwoUniqueNumbers(5);
  const e = pickTwoUniqueNumbers(5);
  const f = pickTwoUniqueNumbers(5);
  const g = pickTwoUniqueNumbers(5);
  const h = pickTwoUniqueNumbers(5);
  const i = pickTwoUniqueNumbers(5);
  const j = pickTwoUniqueNumbers(5);
  // Test that the numbers are not equal
  expect(a.n1 !== a.n2 ).toBeTruthy();
  expect(b.n1 !== b.n2 ).toBeTruthy();
  expect(c.n1 !== c.n2 ).toBeTruthy();
  expect(d.n1 !== d.n2 ).toBeTruthy();
  expect(e.n1 !== e.n2 ).toBeTruthy();
  expect(f.n1 !== f.n2 ).toBeTruthy();
  expect(g.n1 !== g.n2 ).toBeTruthy();
  expect(h.n1 !== h.n2 ).toBeTruthy();
  expect(i.n1 !== i.n2 ).toBeTruthy();
  expect(j.n1 !== j.n2 ).toBeTruthy();
});
