import index from '../index.js';
import countRandom from '../utils.js';

const start = 'Answer "yes" if the number is even, otherwise answer "no".';

let numRandom;

const question = () => {
  numRandom = countRandom(100);
  return `Question: ${numRandom}`;
};

const answer = () => {
  let trueAnswer;
  if (numRandom % 2 === 0) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }
  return trueAnswer;
};

const even = () => index(start, [question, answer]);

export default even;
