import renderScreen from "./render-screen";
import {settings, state, questions} from "../data/game-options";
import getScreenWelcome from "../templates/screens/welcome";
import getScreenLevelArtist from "../templates/screens/level-artist";
import getScreenLevelGenre from "../templates/screens/level-genre";
import getScreenResultAttemptsOver from "../templates/screens/result-attempts-over";
import getScreenResultTimeOver from "../templates/screens/result-time-over";
import getScreenResultWin from "../templates/screens/result-win";

export default () => {

  if (state.timeLeft === 0) {
    renderScreen(getScreenResultTimeOver());

  } else if (state.mistakes > settings.maxCountMistakes) {
    renderScreen(getScreenResultAttemptsOver());

  } else if (state.level === settings.countLevels) {
    renderScreen(getScreenResultWin());

  } else {
    if (questions[state.level].type === `artist`) {
      renderScreen(getScreenLevelArtist(state, questions[state.level]));
    } else if (questions[state.level].type === `genre`) {
      renderScreen(getScreenLevelGenre(state, questions[state.level]));
    }
    state.level++;

  }

};

