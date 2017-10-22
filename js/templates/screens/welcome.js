import getElementbyTemplate from "../../utils/get-element-by-template";
import {settings} from "../../data/game-options";
import switchScreen from "../../utils/switch-screen";
import getLogoTemplate from "../get-logo-template";

export default () => {

  const title = `<h2 class="title main-title">Правила игры</h2>`;

  const buttonPlay = `<button class="main-play">Начать игру</button>`;

  const description = `<p class="text main-text">
      Правила просты&nbsp;— за&nbsp;${settings.maxGametime / 1000 / 60} минут ответить на все вопросы.<br>
      Ошибиться можно ${settings.maxCountMistakes} раза.<br>
      Удачи!
    </p>`;

  const template = `<section class="main main--welcome">
    ${getLogoTemplate()}
    ${buttonPlay}
    ${title}
    ${description}
  </section>`;

  const screen = getElementbyTemplate(template);

  const playButton = screen.querySelector(`.main-play`);

  const playButtonClickHandler = () => {
    switchScreen();
  };

  playButton.addEventListener(`click`, playButtonClickHandler);

  return screen;
};

