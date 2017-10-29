import Welcome from './templates/screens/welcome/welcome';
import LevelArtist from './templates/screens/level-artist/level-artist';
import LevelGenre from './templates/screens/level-genre/level-genre';
import ResultWin from './templates/screens/result-win/result-win';
import ResultAttemptsOver from './templates/screens/result-attempts-over/result-attempts-over';
import ResultTimeOver from './templates/screens/result-time-over/result-time-over';

export default class Application {
  static showWelcome(state) {
    new Welcome(state).init();
  }

  static showLevelArtist(state, question) {
    new LevelArtist(state, question).init();
  }

  static showLevelGenre(state, question) {
    new LevelGenre(state, question).init();
  }

  static showResultWin(state, statistics) {
    new ResultWin(state, statistics).init();
  }

  static showResultAttemptsOver() {
    new ResultAttemptsOver().init();
  }

  static showResultTimeOver() {
    new ResultTimeOver().init();
  }
}
