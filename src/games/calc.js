import index from '../index.js';
import { mathSigns } from '../my-function.js';

const start = 'What is the result of the expression?';

// prettier-ignore
const question = (numRandom1, numRandom2, sign) => `Question: ${numRandom1} ${sign} ${numRandom2}`;
const mainFunction = (numRandom1, numRandom2, sign) => {
  let trueAnswer;
  if (sign === mathSigns()[0]) {
    trueAnswer = numRandom1 - numRandom2;
  } else if (sign === mathSigns()[1]) {
    trueAnswer = numRandom1 + numRandom2;
  } else if (sign === mathSigns()[2]) {
    trueAnswer = numRandom1 * numRandom2;
  }
  return trueAnswer;
};

const calc = () => index(start, question, mainFunction);

export default calc;
