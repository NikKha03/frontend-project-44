import readlineSync from 'readline-sync';
import { countRandom, mathSignRandom } from './my-function.js';

const index = (start, question, mainFunction) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(start);

  for (let count = 0; count !== 3; count += 1) {
    const numRandom1 = countRandom(100);
    const numRandom2 = countRandom(100);
    const sign = mathSignRandom();

    console.log(question(numRandom1, numRandom2, sign));
    const userAnswer = readlineSync.question('Your answer: ');

    // prettier-ignore
    const trueAnswer = String(mainFunction(numRandom1, numRandom2, sign));
    if (trueAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. \nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

export default index;
