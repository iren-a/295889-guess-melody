import AbstractView from "../../../abstract-view";
import getStateTemplate from "../../get-state-template";
import getPlayerTemplate from "../../get-player-template";

const getTitle = (title) => {
  return `<h2 class="title main-title">${title}</h2>`;
};

const getAnswersList = (question) => {
  return question.answerList.map((item, i) => {
    return `<div class="genre-answer">
          ${getPlayerTemplate(item.answer)}
          <input type="checkbox" name="answer" value="${item.answer}" id="a-${i + 1}">
          <label class="genre-answer-check" for="a-${i + 1}"></label>
        </div>`;
  }).join(``);
};

const getTemplate = (state, question) => {
  return `<section class="main main--level main--level-genre">
   ${getStateTemplate(state)}
    <div class="main-wrap">
      ${getTitle(question.title)}
      <form class="genre">
        ${getAnswersList(question)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;
};


export default class LevelGenreView extends AbstractView {
  constructor(state, question) {
    super();
    this.state = state;
    this.question = question;
  }
  get template() {
    return getTemplate(this.state, this.question);
  }
  bind() {
    const button = this.element.querySelector(`.genre-answer-send`);
    button.disabled = true;

    const answers = this.element.querySelectorAll(`input[name="answer"]`);

    Array.from(answers).forEach((item) => {
      item.addEventListener(`click`, (evt) => this.answerClickHandler(evt, answers, button));
    });
    button.addEventListener(`click`, (evt) => this.buttonClickHandler(evt, answers));
  }
  answerClickHandler() {}
  buttonClickHandler() {}
}
