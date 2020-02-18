/**
 * Return a random number from 1 and maxNo.
 * @param {number} maxNo 
 */
export const getRandomNumber = (maxNo) => {
  return Math.floor(Math.random() * maxNo) + 1
}

/**
 * Pick two unique random number between 1 and maxNo.
 * @param {number} maxNo 
 */
export const pickTwoUniqueNumbers = maxNo => {
  let n1;
  let n2;

  // Get the first a random number.
  n1 = getRandomNumber(maxNo)

  // Get a random number that is not the same as the first number
  // that was picked.
  do {
    n2 = getRandomNumber(maxNo);
  }
  while (n1 === n2);

  return {
    n1,
    n2
  }
}