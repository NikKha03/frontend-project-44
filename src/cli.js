import readlineSync from "readline-sync";

export const greeting = () => {
  const name = readlineSync.question("May I have your name? ");
  const result = `Hello, ${name}!`;
  return result;
};
