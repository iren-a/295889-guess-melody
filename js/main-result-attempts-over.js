import {getElementbyTemplate, renderScreen} from "./utils";
import mainWelcomeElement from "./main-welcome";

const template = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const mainResultAttemptsOver = getElementbyTemplate(template);

const replayButton = mainResultAttemptsOver.querySelector(`.main-replay`);

const replayButtonClickHandler = () => {
  renderScreen(mainWelcomeElement);
};

replayButton.addEventListener(`click`, replayButtonClickHandler);

export default mainResultAttemptsOver;
