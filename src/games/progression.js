import index from '../src/index.js';
import { countRandom } from '../src/my-function.js';

const start = 'What number is missing in the progression?';

const arrRndClon = [];

const question = (firstNum, plusNum) => {
  const arr = [];
  arr[0] = Math.floor(firstNum / 2);
  for (let id = 1; arr.length !== 10; id += 1) {
    arr[id] = arr[id - 1] + Math.floor(plusNum / 3);
  }
  const rnd = countRandom(9);
  arrRndClon[0] = arr[rnd];
  arr[rnd] = '..';

  return `Question: ${arr.join(' ')}`;
};

const mainFunction = () => {
  const trueAnswer = arrRndClon[0];
  return trueAnswer;
};

const progression = () => index(start, question, mainFunction);

export default progression;
