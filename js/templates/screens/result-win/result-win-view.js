import AbstractView from "../../../abstract-view";
import getLogoTemplate from "../../get-logo-template";
import getReplayButtonTemplate from "../../get-replay-button-template";
import {settings} from "../../../data/game-options";
import getResultText from "../../../utils/get-result-text";

const title = `<h2 class="title">Вы настоящий меломан!</h2>`;

const getStatTemplate = (state, statistic) => {
  const countQuickAnswers = state.results.filter((item) => {
    return (item.isCorrect && item.time < settings.MAX_QUICK_ANSWER_TIME);
  }).length;

  return `<div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали ${state.score} баллов (${countQuickAnswers} быстрых)
      <br>совершив ${state.mistakes} ошибки</div>
    <span class="main-comparison">${getResultText(statistic, state.score)}</span>`;

};

const getTemplate = (state, statistic) => {
  return `<section class="main main--result">
    ${getLogoTemplate()}
    ${title}
    ${getStatTemplate(state, statistic)}
    ${getReplayButtonTemplate(`Сыграть ещё раз`)}
  </section>`;
};

export default class ResultWinView extends AbstractView {
  constructor(state, statistic) {
    super();
    this.state = state;
    this.statistic = statistic;
  }
  get template() {
    return getTemplate(this.state, this.statistic);
  }
  bind() {
    const replayButton = this.element.querySelector(`.main-replay`);
    replayButton.addEventListener(`click`, this.replayButtonClickHandler);
  }
  replayButtonClickHandler() {}
}
