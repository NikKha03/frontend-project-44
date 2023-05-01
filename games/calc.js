import index from '../src/index.js';

const start = 'What is the result of the expression?';

// prettier-ignore
const question = (numRandom1, numRandom2, mathSignRandom) => `Question: ${numRandom1} ${mathSignRandom} ${numRandom2}`;
const deductions = (numRandom1, numRandom2, mathSignRandom, mathSigns) => {
  let trueAnswer;
  if (mathSignRandom === mathSigns[0]) {
    trueAnswer = numRandom1 - numRandom2;
  } else if (mathSignRandom === mathSigns[1]) {
    trueAnswer = numRandom1 + numRandom2;
  } else if (mathSignRandom === mathSigns[2]) {
    trueAnswer = numRandom1 * numRandom2;
  }
  return trueAnswer;
};

const calc = () => index(start, question, deductions);

export default calc;
