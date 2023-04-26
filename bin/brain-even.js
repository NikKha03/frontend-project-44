#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const logic = () => {
  for (let count = 0; count !== 3; count += 1) {
    const numRandom = Math.floor(Math.random() * (101 - 1) + 1);
    console.log(`Question: ${numRandom}`);
    const userAnswer = readlineSync.question('Your answer: ');

    let trueAnswer;
    if (numRandom % 2 === 0) {
      trueAnswer = 'yes';
    } else {
      trueAnswer = 'no';
    }

    if (trueAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      return `Let's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

console.log(logic());
