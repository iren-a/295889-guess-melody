import Application from "../application";
import {settings, state, questions} from "../data/game-options";

export default () => {

  if (state.isReset) {
    state.reset();
    Application.showWelcome(state);

  } else if (state.time === 0) {
    Application.showResultTimeOver(state);
    state.isReset = true;

  } else if (state.mistakes > settings.maxCountMistakes) {
    Application.showResultAttemptsOver(state);
    state.isReset = true;

  } else if (state.level === settings.countLevels) {
    Application.showResultWin(state);
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

