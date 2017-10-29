import LevelGenreView from "./level-genre-view";
import switchScreen from "../../../utils/switch-screen";
import processingAnswer from "../../../utils/processing-answer";
import renderScreen from "../../../utils/render-screen";

export default class LevelArtist {
  constructor(state, question) {
    this.state = state;
    this.question = question;
    this.view = new LevelGenreView(this.state, this.question);
    this.answerTimerValue = 0;
    this.answerTimer = null;

    this.view.answerClickHandler = (evt, answers, button) => {
      const isSomeAnswerSelected = () => {
        return Array.from(answers).some((item) => item.checked);
      };
      button.disabled = !isSomeAnswerSelected();
    };

    this.view.buttonClickHandler = (evt, answers) => {
      evt.preventDefault();
      clearInterval(this.answerTimer);
      processingAnswer(Array.from(answers).filter((item) => {
        return item.checked;
      }).map((item) => {
        return item.value;
      }), question, this.answerTimerValue * 1000);
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
