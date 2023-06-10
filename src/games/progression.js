import index from '../index.js';
import countRandom from '../utils.js';

const start = 'What number is missing in the progression?';

const arrRndClon = [];

const creatingProgression = () => {
  const firstNum = countRandom(50);
  const plusNum = countRandom(20);
  const arr = [];
  arr[0] = Math.floor(firstNum);
  for (let id = 1; arr.length !== 10; id += 1) {
    arr[id] = arr[id - 1] + Math.floor(plusNum);
  }
  const rnd = countRandom(9);
  arrRndClon[0] = arr[rnd];
  arr[rnd] = '..';

  return arr.join(' ');
};

const getQuestionAndAnswer = () => {
  const question = `Question: ${creatingProgression()}`;
  const answer = arrRndClon[0];

  return [question, answer];
};

const progression = () => index(start, getQuestionAndAnswer);

export default progression;
