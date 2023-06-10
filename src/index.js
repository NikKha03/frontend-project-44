import readlineSync from 'readline-sync';

const roundCounts = 3;

const index = (description, get) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let count = 0; count !== roundCounts; count += 1) {
    const [question, answer] = get();

    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    const trueAnswer = String(answer);
    if (trueAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. \nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

export default index;
