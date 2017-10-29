import Application from "../application";
import {settings, state, questions, statistics} from "../data/game-options";

export default () => {

  if (state.isReset) {
    state.reset();
    Application.showWelcome(state);

  } else if (state.time === 0) {
    state.timer.stop();
    Application.showResultTimeOver();
    state.isReset = true;

  } else if (state.mistakes > settings.maxCountMistakes) {
    state.timer.stop();
    Application.showResultAttemptsOver();
    state.isReset = true;

  } else if (state.level === settings.countLevels) {
    state.timer.stop();
    Application.showResultWin(state, statistics);
    state.isReset = true;

  } else {
    if (questions[state.level].type === `artist`) {
      Application.showLevelArtist(state, questions[state.level]);
    } else if (questions[state.level].type === `genre`) {
      Application.showLevelGenre(state, questions[state.level]);
    }
    state.level++;

  }

};

