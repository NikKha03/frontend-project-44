import index from '../index.js';
import countRandom from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (startNum, step) => {
  const progression = [];
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + step * i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const startNum = countRandom(50);
  const step = countRandom(20);
  const progression = getProgression(startNum, step);
  const randomIndex = countRandom(9);

  const answer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;

  return [question, answer];
};

const progression = () => index(description, getQuestionAndAnswer);

export default progression;
