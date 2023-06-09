import index from '../index.js';
import countRandom from '../utils.js';

const start = 'What number is missing in the progression?';

const arrRndClon = [];
let firstNum;
let plusNum;

const question = () => {
  firstNum = countRandom(50);
  plusNum = countRandom(20);
  const arr = [];
  arr[0] = Math.floor(firstNum);
  for (let id = 1; arr.length !== 10; id += 1) {
    arr[id] = arr[id - 1] + Math.floor(plusNum);
  }
  const rnd = countRandom(9);
  arrRndClon[0] = arr[rnd];
  arr[rnd] = '..';

  return `Question: ${arr.join(' ')}`;
};

const answer = () => {
  const trueAnswer = arrRndClon[0];
  return trueAnswer;
};

const progression = () => index(start, [question, answer]);

export default progression;
