import index from '../index.js';
import countRandom from '../utils.js';

const start = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
let numRandom1;

const question = () => {
  numRandom1 = countRandom(100);
  return `Question: ${numRandom1}`;
};
const answer = () => {
  let trueAnswer;
  if (isPrime(numRandom1) === true) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }
  return trueAnswer;
};

const prime = () => index(start, [question, answer]);

export default prime;
