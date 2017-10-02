import {getElementbyTemplate, renderScreen} from "./utils";
import mainWelcomeElement from "./main-welcome";

const template = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали 12 баллов (8 быстрых)
      <br>совершив 3 ошибки</div>
    <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const mainResult = getElementbyTemplate(template);

const replayButton = mainResult.querySelector(`.main-replay`);

const replayButtonClickHandler = () => {
  renderScreen(mainWelcomeElement);
};

replayButton.addEventListener(`click`, replayButtonClickHandler);

export default mainResult;
