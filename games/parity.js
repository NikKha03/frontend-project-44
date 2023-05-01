import index from '../src/index.js';

const start = 'Answer "yes" if the number is even, otherwise answer "no".';

// prettier-ignore
const question = (numRandom1) => `Question: ${numRandom1}`;
const deductions = (numRandom1) => {
  let trueAnswer;
  if (numRandom1 % 2 === 0) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }
  return trueAnswer;
};

const parity = () => index(start, question, deductions);

export default parity;
