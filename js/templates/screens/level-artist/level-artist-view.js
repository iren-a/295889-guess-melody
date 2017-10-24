import AbstractView from "../../../abstract-view";
import getStateTemplate from "../../get-state-template";
import getPlayerTemplate from "../../get-player-template";

const getTitle = (title) => `<h2 class="title main-title">${title}</h2>`;

const getAnswersList = (question) => question.answerList.map((item, i) => {
  return `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${i + 1}" name="answer" value="${item.answer}"/>
          <label class="main-answer" for="answer-${i + 1}">
            <img class="main-answer-preview" src="http://placehold.it/134x134"
                 alt="${item.answer}" width="134" height="134">
            ${item.answer}
          </label>
        </div>`;
}).join(``);

const getTemplate = (state, question) => `<section class="main main--level main--level-artist">
    ${getStateTemplate(state)}
    <div class="main-wrap">
      ${getTitle(question.title)}
      ${getPlayerTemplate(question.audioSrc)}
      <form class="main-list">
        ${getAnswersList(question)}
      </form>
    </div>
  </section>`;


export default class LevelArtistView extends AbstractView {
  constructor(state, question) {
    super();
    this.state = state;
    this.question = question;
  }
  get template() {
    return getTemplate(this.state, this.question);
  }
  bind() {
    const answers = this._element.querySelectorAll(`.main-answer-r`)
    answers.forEach((item) => {
      item.addEventListener(`click`, this.answerClickHandler);
    });
  }
  answerClickHandler() {}
}
