import readlineSync from 'readline-sync';

const index = (start, question, deductions) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(start);

  for (let count = 0; count !== 3; count += 1) {
    const mathSigns = ['-', '+', '*'];
    const numRandom1 = Math.floor(Math.random() * (101 - 1) + 1);
    const numRandom2 = Math.floor(Math.random() * (101 - 1) + 1);
    const mathSignRandom = mathSigns[Math.floor(Math.random() * (3 - 0) + 0)];

    console.log(question(numRandom1, numRandom2, mathSignRandom));
    const userAnswer = readlineSync.question('Your answer: ');

    // prettier-ignore
    const trueAnswer = String(deductions(numRandom1, numRandom2, mathSignRandom, mathSigns));
    if (trueAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. \nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

export default index;
