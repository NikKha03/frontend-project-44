const countRandom = (maxNum) => {
  const count = Math.floor(Math.random() * (maxNum + 1));
  return count;
};

export default countRandom;
