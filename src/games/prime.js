import index from '../index.js';
import countRandom from '../utils.js';

// prettier-ignore
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getQuestionAndAnswer = () => {
  const numRandom1 = countRandom(100);
  const question = `Question: ${numRandom1}`;
  const answer = isPrime(numRandom1) ? 'yes' : 'no';

  return [question, answer];
};

const prime = () => index(description, getQuestionAndAnswer);

export default prime;
