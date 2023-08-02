import index from '../index.js';
import countRandom from '../utils.js';

// prettier-ignore
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};

const getQuestionAndAnswer = () => {
  const numRandom1 = countRandom(100);
  const question = `Question: ${numRandom1}`;
  const answer = isPrime(numRandom1) ? 'yes' : 'no';

  return [question, answer];
};

const prime = () => index(description, getQuestionAndAnswer);

export default prime;
