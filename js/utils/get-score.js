import {settings} from "../data/game-options";

export default (answers) => {
  return answers.reduce((sum, current) => {
    if (current.isCorrect && current.time < settings.MAX_QUICK_ANSWER_TIME) {
      return sum + 2;
    } else if (current.isCorrect) {
      return sum + 1;
    } else {
      return sum - 2;
    }
  }, 0);

};
