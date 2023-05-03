const countRandom = (maxNum) => {
  const count = Math.floor(Math.random() * (maxNum + 1));
  return count;
};

const mathSigns = () => ['-', '+', '*'];

const mathSignRandom = () => {
  const sign = mathSigns()[Math.floor(Math.random() * 3)];
  return sign;
};

export { countRandom, mathSigns, mathSignRandom };
