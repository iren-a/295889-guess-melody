import {getElementbyTemplate, renderScreen} from "./utils";
import mainWelcomeElement from "./main-welcome";

const template = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const mainResultTimeOver = getElementbyTemplate(template);

const replayButton = mainResultTimeOver.querySelector(`.main-replay`);

const replayButtonClickHandler = () => {
  renderScreen(mainWelcomeElement);
};

replayButton.addEventListener(`click`, replayButtonClickHandler);

export default mainResultTimeOver;
