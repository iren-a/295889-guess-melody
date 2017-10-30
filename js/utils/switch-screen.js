import Application from "../application";
import {settings, state, questions} from "../data/game-options";
import GameTimer from './game-timer';
import updateTime from './updateTime';
import convertTime from '../utils/convert-time';

export default () => {

  if (state.isReset) {
    state.reset();
    Application.showWelcome(state);

  } else if (state.time === 0) {
    state.timer.stop();
    Application.showResultTimeOver(state);
    state.isReset = true;

  } else if (state.mistakes > settings.maxCountMistakes) {
    state.timer.stop();
    Application.showResultAttemptsOver(state);
    state.isReset = true;

  } else if (state.level === settings.countLevels) {
    state.timer.stop();
    Application.showResultWin(state);
    state.isReset = true;

  } else {
    if (state.level === 0) {
      state.timer = new GameTimer(state.time);
      state.timer.onTick = (time) => {
        updateTime(time);
      };
      state.timer.start();
    }
    if (questions[state.level].type === `artist`) {
      Application.showLevelArtist(state);
    } else if (questions[state.level].type === `genre`) {
      Application.showLevelGenre(state);
    }
    state.level++;

  }

};

