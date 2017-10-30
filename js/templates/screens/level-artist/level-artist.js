import LevelArtistView from "./level-artist-view";
import switchScreen from "../../../utils/switch-screen";
import processingAnswer from "../../../utils/processing-answer";
import renderScreen from "../../../utils/render-screen";
import {questions} from "../../../data/game-options";

export default class LevelArtist {
  constructor(state) {
    this.state = state;
    this.question = questions[state.level];
    this.view = new LevelArtistView(this.state, this.question);
    this.answerTimerValue = 0;
    this.answerTimer = null;

    this.view.answerClickHandler = (evt) => {
      clearInterval(this.answerTimer);
      processingAnswer([evt.target.value], this.question, this.answerTimerValue * 1000);
      switchScreen();
    };
  }
  init() {
    this.answerTimer = setInterval(() => this.answerTimerValue++, 1000);
    renderScreen(this.view.element);
  }
}
