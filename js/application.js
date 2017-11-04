import Loader from './loader';
import adaptQuestions from './data/adapt-questions';
import {fillQuestions} from './data/game-options';
import getScore from "./utils/get-score";
import WelcomeScreen from './templates/screens/welcome/welcome';
import LevelArtistScreen from './templates/screens/level-artist/level-artist';
import LevelGenreScreen from './templates/screens/level-genre/level-genre';
import ResultWinScreen from './templates/screens/result-win/result-win';
import ResultAttemptsOverScreen from './templates/screens/result-attempts-over/result-attempts-over';
import ResultTimeOverScreen from './templates/screens/result-time-over/result-time-over';

const ControllerId = {
  WELCOME: `welcome`,
  LEVEL_ARTIST: `levelArtist`,
  LEVEL_GENRE: `levelGenre`,
  RESULT_WIN: `resultWin`,
  RESULT_ATTEMPTS_OVER: `resultAttemptsOver`,
  RESULT_TIME_OVER: `resultTimeOver`
};

const routes = {
  [ControllerId.WELCOME]: WelcomeScreen,
  [ControllerId.LEVEL_ARTIST]: LevelArtistScreen,
  [ControllerId.LEVEL_GENRE]: LevelGenreScreen,
  [ControllerId.RESULT_WIN]: ResultWinScreen,
  [ControllerId.RESULT_ATTEMPTS_OVER]: ResultAttemptsOverScreen,
  [ControllerId.RESULT_TIME_OVER]: ResultTimeOverScreen,
};


const saveState = (state) => {
  return btoa(encodeURIComponent(JSON.stringify(state)));
};

const loadState = (dataString) => {
  try {
    return JSON.parse(decodeURIComponent(atob(dataString)));
  } catch (err) {
    return null;
  }
};


export default class Application {
  static init(loadedData) {
    fillQuestions(loadedData);

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

  static showLevelArtist(state) {
    location.hash = `${ControllerId.LEVEL_ARTIST}?${saveState(state)}`;
  }

  static showLevelGenre(state) {
    location.hash = `${ControllerId.LEVEL_GENRE}?${saveState(state)}`;
  }

  static showResultWin(state) {
    state.score = getScore(state.results);
    Loader.saveResults(state).then(() => {
      location.hash = `${ControllerId.RESULT_WIN}?${saveState(state)}`;
    });

    // location.hash = `${ControllerId.RESULT_WIN}?${saveState(state)}`;
  }

  static showResultAttemptsOver(state) {
    location.hash = `${ControllerId.RESULT_ATTEMPTS_OVER}?${saveState(state)}`;
  }

  static showResultTimeOver(state) {
    location.hash = `${ControllerId.RESULT_TIME_OVER}?${saveState(state)}`;
  }
}

Loader.loadData().
    then((loadedData) => adaptQuestions(loadedData)).
    then((adaptedLoadedData) => Application.init(adaptedLoadedData)).
    catch(Loader.onError);

