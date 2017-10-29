import LevelArtistView from "./level-artist-view";
import switchScreen from "../../../utils/switch-screen";
import processingAnswer from "../../../utils/processing-answer";
import renderScreen from "../../../utils/render-screen";

export default class LevelArtist {
  constructor(state, question) {
    this.state = state;
    this.question = question;
    this.view = new LevelArtistView(this.state, this.question);
    this.answerTimerValue = 0;
    this.answerTimer = null;

    this.view.answerClickHandler = (evt) => {
      clearInterval(this.answerTimer);
      processingAnswer([evt.target.value], question, this.answerTimerValue * 1000);
      switchScreen();
    };
  }
  init() {
    this.answerTimer = setInterval(() => this.answerTimerValue++, 1000);
    this.state.timer.onTick = (time) => {
      this.view.updateTime(time);
    };
    renderScreen(this.view.element);
  }
}
