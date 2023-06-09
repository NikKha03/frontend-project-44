import index from '../index.js';
import countRandom from '../utils.js';

const start = 'Find the greatest common divisor of given numbers.';

let numRandom1;
let numRandom2;

const question = () => {
  numRandom1 = countRandom(100);
  numRandom2 = countRandom(100);
  return `Question: ${numRandom1} ${numRandom2}`;
};
const answer = () => {
  while (numRandom1 !== numRandom2) {
    if (numRandom1 > numRandom2) {
      numRandom1 -= numRandom2;
    } else {
      numRandom2 -= numRandom1;
    }
  }
  return numRandom1;
};

const nod = () => index(start, [question, answer]);

export default nod;
