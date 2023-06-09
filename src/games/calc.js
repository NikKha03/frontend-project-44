import index from '../index.js';
import countRandom from '../utils.js';

const start = 'What is the result of the expression?';

const mathSigns = () => ['-', '+', '*'];
const mathSignRandom = () => {
  const sign = mathSigns()[Math.floor(Math.random() * 3)];
  return sign;
};

let numRandom1;
let numRandom2;
let sign;

const question = () => {
  numRandom1 = countRandom(10);
  numRandom2 = countRandom(10);
  sign = mathSignRandom();
  return `Question: ${numRandom1} ${sign} ${numRandom2}`;
};

const answer = () => {
  let trueAnswer;
  switch (sign) {
    case mathSigns()[0]:
      trueAnswer = numRandom1 - numRandom2;
      break;
    case mathSigns()[1]:
      trueAnswer = numRandom1 + numRandom2;
      break;
    case mathSigns()[2]:
      trueAnswer = numRandom1 * numRandom2;
      break;
    default:
  }
  return trueAnswer;
};

const calc = () => index(start, [question, answer]);

export default calc;
