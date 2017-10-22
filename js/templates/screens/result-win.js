import getElementbyTemplate from "../../utils/get-element-by-template";
import {settings, state, statistics} from "../../data/game-options";
import getScore from "../../utils/get-score";
import getResultText from "../../utils/get-result-text";
import switchScreen from "../../utils/switch-screen";
import getLogoTemplate from "../get-logo-template";
import getReplayButtonTemplate from "../get-replay-button-template";


export default () => {

  const title = `<h2 class="title">Вы настоящий меломан!</h2>`;

  const score = getScore(state.results);

  const countQuickAnswers = state.results.filter((item) => {
    return (item.isCorrect && item.time < settings.maxQuickAnswerTime);
  }).length;

  const statTemplate = `<div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали ${score} баллов (${countQuickAnswers} быстрых)
      <br>совершив ${state.mistakes} ошибки</div>
    <span class="main-comparison">${getResultText(statistics, score)}</span>`;

  const template = `<section class="main main--result">
    ${getLogoTemplate()}
    ${title}
    ${statTemplate}
    ${getReplayButtonTemplate(`Сыграть ещё раз`)}
  </section>`;

  const screen = getElementbyTemplate(template);

  const replayButton = screen.querySelector(`.main-replay`);

  const replayButtonClickHandler = () => {
    switchScreen();
  };

  replayButton.addEventListener(`click`, replayButtonClickHandler);

  return screen;
};
