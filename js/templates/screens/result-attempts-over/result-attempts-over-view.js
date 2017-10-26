import AbstractView from "../../../abstract-view";
import getLogoTemplate from "../../get-logo-template";
import getReplayButtonTemplate from "../../get-replay-button-template";

const title = `<h2 class="title">Какая жалость!</h2>`;

const statTemplate = `<div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`;

const template = `<section class="main main--result">
    ${getLogoTemplate()}
    ${title}
    ${statTemplate}
    ${getReplayButtonTemplate(`Попробовать ещё раз`)}
  </section>`;

export default class ResultAttemptsOverView extends AbstractView {
  get template() {
    return template;
  }
  bind() {
    const replayButton = this.element.querySelector(`.main-replay`);
    replayButton.addEventListener(`click`, this.replayButtonClickHandler);
  }
  replayButtonClickHandler() {}
}
