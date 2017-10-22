import getElementbyTemplate from "../../utils/get-element-by-template";
import switchScreen from "../../utils/switch-screen";
import getLogoTemplate from "../get-logo-template";
import getReplayButtonTemplate from "../get-replay-button-template";

export default () => {

  const title = `<h2 class="title">Увы и ах!</h2>`;

  const statTemplate = `<div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`;

  const template = `<section class="main main--result">
    ${getLogoTemplate()}
    ${title}
    ${statTemplate}
    ${getReplayButtonTemplate(`Попробовать ещё раз`)}
  </section>`;

  const screen = getElementbyTemplate(template);

  const replayButton = screen.querySelector(`.main-replay`);

  const replayButtonClickHandler = () => {
    switchScreen();
  };

  replayButton.addEventListener(`click`, replayButtonClickHandler);

  return screen;

};
