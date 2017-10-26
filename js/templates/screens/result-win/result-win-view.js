import AbstractView from "../../../abstract-view";
import getLogoTemplate from "../../get-logo-template";
import getReplayButtonTemplate from "../../get-replay-button-template";
import {settings} from "../../../data/game-options";
import getScore from "../../../utils/get-score";
import getResultText from "../../../utils/get-result-text";

const title = `<h2 class="title">Вы настоящий меломан!</h2>`;

const getStatTemplate = (state, statistics) => {
  const countQuickAnswers = state.results.filter((item) => {
    return (item.isCorrect && item.time < settings.maxQuickAnswerTime);
  }).length;

  const score = getScore(state.results);

  return `<div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали ${score} баллов (${countQuickAnswers} быстрых)
      <br>совершив ${state.mistakes} ошибки</div>
    <span class="main-comparison">${getResultText(statistics, score)}</span>`;

};

const getTemplate = (state, statistics) => {
  return `<section class="main main--result">
    ${getLogoTemplate()}
    ${title}
    ${getStatTemplate(state, statistics)}
    ${getReplayButtonTemplate(`Сыграть ещё раз`)}
  </section>`;
};

export default class ResultWinView extends AbstractView {
  constructor(state, statistics) {
    super();
    this.state = state;
    this.statistics = statistics;
  }
  get template() {
    return getTemplate(this.state, this.statistics);
  }
  bind() {
    const replayButton = this.element.querySelector(`.main-replay`);
    replayButton.addEventListener(`click`, this.replayButtonClickHandler);
  }
  replayButtonClickHandler() {}
}
