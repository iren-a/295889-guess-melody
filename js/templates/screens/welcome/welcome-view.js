import AbstractView from "../../../abstract-view";
import {settings} from "../../../data/game-options";
import getLogoTemplate from "../../get-logo-template";

const title = `<h2 class="title main-title">Правила игры</h2>`;

const buttonPlay = `<button class="main-play">Начать игру</button>`;

const description = `<p class="text main-text">
    Правила просты&nbsp;— за&nbsp;${settings.MAX_GAME_TIME / 1000 / 60} минут ответить на все вопросы.<br>
    Ошибиться можно ${settings.MAX_COUNT_MISTAKES} раза.<br>
    Удачи!
  </p>`;

const template = `<section class="main main--welcome">
  ${getLogoTemplate()}
  ${buttonPlay}
  ${title}
  ${description}
</section>`;


export default class WelcomeView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }
  get template() {
    return template;
  }
  bind() {
    const playButton = this.element.querySelector(`.main-play`);
    playButton.addEventListener(`click`, this.playButtonClickHandler);
  }
  playButtonClickHandler() {}
}
