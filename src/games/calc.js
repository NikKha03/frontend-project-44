import index from '../index.js';
import countRandom from '../utils.js';

const description = 'What is the result of the expression?';

const mathSigns = ['-', '+', '*'];
const mathSignRandom = () => {
  const sign = mathSigns[Math.floor(Math.random() * 3)];
  return sign;
};

const calculate = (sign, numRandom1, numRandom2) => {
  let result;
  switch (sign) {
    case '-':
      result = numRandom1 - numRandom2;
      break;
    case '+':
      result = numRandom1 + numRandom2;
      break;
    case '*':
      result = numRandom1 * numRandom2;
      break;
    default:
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const numRandom1 = countRandom(10);
  const numRandom2 = countRandom(10);
  const sign = mathSignRandom();
  const question = `Question: ${numRandom1} ${sign} ${numRandom2}`;
  const answer = calculate(sign, numRandom1, numRandom2);

  return [question, answer];
};

const calc = () => index(description, getQuestionAndAnswer);

export default calc;
