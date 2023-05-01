import index from '../src/index.js';

const start = 'Find the greatest common divisor of given numbers.';

// prettier-ignore
const question = (numRandom1, numRandom2) => `Question: ${numRandom1} ${numRandom2}`;
const deductions = (numRandom1, numRandom2) => {
  if (numRandom1 === 0) {
    return numRandom2;
  }
  if (numRandom2 === 0) {
    return numRandom1;
  }
  return deductions(numRandom2, numRandom1 % numRandom2);
};

const nod = () => index(start, question, deductions);

export default nod;
