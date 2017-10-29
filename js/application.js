import Welcome from './templates/screens/welcome/welcome';
import LevelArtist from './templates/screens/level-artist/level-artist';
import LevelGenre from './templates/screens/level-genre/level-genre';
import ResultWin from './templates/screens/result-win/result-win';
import ResultAttemptsOver from './templates/screens/result-attempts-over/result-attempts-over';
import ResultTimeOver from './templates/screens/result-time-over/result-time-over';
import GameTimer from './data/game-timer';

const ControllerId = {
  WELCOME: `welcome`,
  LEVEL_ARTIST: `levelArtist`,
  LEVEL_GENRE: `levelGenre`,
  RESULT_WIN: `resultWin`,
  RESULT_ATTEMPTS_OVER: `resultAttemptsOver`,
  RESULT_TIME_OVER: `resultTimeOver`
};

const routes = {
  [ControllerId.WELCOME]: Welcome,
  [ControllerId.LEVEL_ARTIST]: LevelArtist,
  [ControllerId.LEVEL_GENRE]: LevelGenre,
  [ControllerId.RESULT_WIN]: ResultWin,
  [ControllerId.RESULT_ATTEMPTS_OVER]: ResultAttemptsOver,
  [ControllerId.RESULT_TIME_OVER]: ResultTimeOver,
};

const saveState = (state) => {
  return window.btoa(encodeURIComponent(JSON.stringify(state)));
};

const loadState = (dataString) => {
  return JSON.parse(decodeURIComponent(window.atob(dataString)));
};


export default class Application {
  static init() {
    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      this.changeHash(id, data);
    };

    window.addEventListener(`hashchange`, hashChangeHandler);
    hashChangeHandler();
  }

  static changeHash(id, data) {
    const Controller = routes[id];
    if (Controller) {
      new Controller(loadState(data)).init();
    }
  }

  static showWelcome(state) {
    location.hash = `${ControllerId.WELCOME}?${saveState(state)}`;
  }

  static showLevelArtist(state, question) {
    if (state.level === 0) {
      state.timer = new GameTimer(state.time);
      state.timer.start();
    }
    new LevelArtist(state, question).init();
  }

  static showLevelGenre(state, question) {
    new LevelGenre(state, question).init();
  }

  static showResultWin(state) {
    state.timer.stop();
    location.hash = `${ControllerId.RESULT_WIN}?${saveState(state)}`;
  }

  static showResultAttemptsOver(state) {
    state.timer.stop();
    location.hash = `${ControllerId.RESULT_ATTEMPTS_OVER}?${saveState(state)}`;
  }

  static showResultTimeOver(state) {
    state.timer.stop();
    location.hash = `${ControllerId.RESULT_TIME_OVER}?${saveState(state)}`;
  }
}

Application.init();
