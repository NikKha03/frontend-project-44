import index from '../index.js';
import countRandom from '../utils.js';

// prettier-ignore
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (numRandom) => numRandom % 2 === 0;

const getQuestionAndAnswer = () => {
  const numRandom = countRandom(100);
  const question = `Question: ${numRandom}`;
  const answer = isEven(numRandom) ? 'yes' : 'no';

  return [question, answer];
};

const even = () => index(description, getQuestionAndAnswer);

export default even;
