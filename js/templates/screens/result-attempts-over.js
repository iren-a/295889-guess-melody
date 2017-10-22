import getElementbyTemplate from "../../utils/get-element-by-template";
import process from "../../utils/process";
import getLogoTemplate from "../get-logo-template";
import getReplayButtonTemplate from "../get-replay-button-template";

export default () => {

  const title = `<h2 class="title">Какая жалость!</h2>`;

  const statTemplate = `<div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`;

  const template = `<section class="main main--result">
    ${getLogoTemplate()}
    ${title}
    ${statTemplate}
    ${getReplayButtonTemplate(`Попробовать ещё раз`)}
  </section>`;

  const screen = getElementbyTemplate(template);

  const replayButton = screen.querySelector(`.main-replay`);

  const replayButtonClickHandler = () => {
    process();
  };

  replayButton.addEventListener(`click`, replayButtonClickHandler);

  return screen;

};


