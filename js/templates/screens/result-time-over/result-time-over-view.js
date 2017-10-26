import AbstractView from "../../../abstract-view";
import getLogoTemplate from "../../get-logo-template";
import getReplayButtonTemplate from "../../get-replay-button-template";

const title = `<h2 class="title">Увы и ах!</h2>`;

const statTemplate = `<div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`;

const template = `<section class="main main--result">
    ${getLogoTemplate()}
    ${title}
    ${statTemplate}
    ${getReplayButtonTemplate(`Попробовать ещё раз`)}
  </section>`;

export default class ResultTimeOverView extends AbstractView {
  get template() {
    return template;
  }
  bind() {
    const replayButton = this.element.querySelector(`.main-replay`);
    replayButton.addEventListener(`click`, this.replayButtonClickHandler);
  }
  replayButtonClickHandler() {}
}
