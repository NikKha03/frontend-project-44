import index from '../index.js';
import countRandom from '../utils.js';

const start = 'Find the greatest common divisor of given numbers.';

const findGcd = (numRandom1, numRandom2) => {
  let num1 = numRandom1;
  let num2 = numRandom2;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
};

const getQuestionAndAnswer = () => {
  const numRandom1 = countRandom(100);
  const numRandom2 = countRandom(100);
  const question = `Question: ${numRandom1} ${numRandom2}`;
  const answer = findGcd(numRandom1, numRandom2);

  return [question, answer];
};

const gcd = () => index(start, getQuestionAndAnswer);

export default gcd;
