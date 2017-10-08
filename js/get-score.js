const fastTime = 30000;

const getScore = (answers, attemptsLeft) => {
  if (answers.length < 10 || attemptsLeft === 0) {
    return -1;
  }
  return answers.reduce((sum, current) => {
    if (current.isCorrect && current.time < fastTime) {
      return sum + 2;
    } else if (current.isCorrect) {
      return sum + 1;
    } else {
      return sum - 2;
    }
  }, 0);

};

export default getScore;
