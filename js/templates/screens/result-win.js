import getElementbyTemplate from "../../utils/get-element-by-template";
import process from "../../utils/process";
import getLogoTemplate from "../get-logo-template";
import getReplayButtonTemplate from "../get-replay-button-template";


export default () => {

  const title = `<h2 class="title">Вы настоящий меломан!</h2>`;

  const statTemplate = `<div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали 12 баллов (8 быстрых)
      <br>совершив 3 ошибки</div>
    <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>`;

  const template = `<section class="main main--result">
    ${getLogoTemplate()}
    ${title}
    ${statTemplate}
    ${getReplayButtonTemplate(`Сыграть ещё раз`)}
  </section>`;

  const screen = getElementbyTemplate(template);

  const replayButton = screen.querySelector(`.main-replay`);

  const replayButtonClickHandler = () => {
    process();
  };

  replayButton.addEventListener(`click`, replayButtonClickHandler);

  return screen;
};
