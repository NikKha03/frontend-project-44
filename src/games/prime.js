import index from '../index.js';

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

const question = (numRandom1) => `Question: ${numRandom1}`;
const mainFunction = (numRandom1) => {
  let trueAnswer;
  if (isPrime(numRandom1) === true) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }
  return trueAnswer;
};

const prime = () => index(start, question, mainFunction);

export default prime;
