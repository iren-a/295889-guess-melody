import {state} from "../data/game-options";

const isArrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      return false;
    }
  }
  return true;
};

export default (answers, question) => {
  const correctAnswers = question.answerList.filter((item) => {
    return item.isCorrect;
  }).map((item) => {
    return item.answer;
  });

  const checkAnswer = isArrayEqual(answers, correctAnswers);

  state.results.push({time: 30001, isCorrect: checkAnswer});

  if (!checkAnswer) {
    state.mistakes++;
  }
};
