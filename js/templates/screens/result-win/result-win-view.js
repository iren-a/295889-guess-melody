import AbstractView from "../../../abstract-view";
import getLogoTemplate from "../../get-logo-template";
import getReplayButtonTemplate from "../../get-replay-button-template";
import {settings, statistics} from "../../../data/game-options";
import getScore from "../../../utils/get-score";
import getResultText from "../../../utils/get-result-text";

const title = `<h2 class="title">Вы настоящий меломан!</h2>`;

const getStatTemplate = (state) => {
  const countQuickAnswers = state.results.filter((item) => {
    return (item.isCorrect && item.time < settings.MAX_QUICK_ANSWER_TIME);
  }).length;

  const score = getScore(state.results);

  return `<div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали ${score} баллов (${countQuickAnswers} быстрых)
      <br>совершив ${state.mistakes} ошибки</div>
    <span class="main-comparison">${getResultText(statistics, score)}</span>`;

};

const getTemplate = (state) => {
  return `<section class="main main--result">
    ${getLogoTemplate()}
    ${title}
    ${getStatTemplate(state)}
    ${getReplayButtonTemplate(`Сыграть ещё раз`)}
  </section>`;
};

export default class ResultWinView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }
  get template() {
    return getTemplate(this.state);
  }
  bind() {
    const replayButton = this.element.querySelector(`.main-replay`);
    replayButton.addEventListener(`click`, this.replayButtonClickHandler);
  }
  replayButtonClickHandler() {}
}
