import getElementbyTemplate from "../../utils/get-element-by-template";
import process from "../../utils/process";
import getStateTemplate from "../get-state-template";
import getPlayerTemplate from "../get-player-template";

export default (state, question) => {

  const title = `<h2 class="title main-title">${question.title}</h2>`;

  const answersList = question.answerList.map((item, i) => {
    return `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${i + 1}" name="answer" value="${item.answer}"/>
          <label class="main-answer" for="answer-${i + 1}">
            <img class="main-answer-preview" src="http://placehold.it/134x134"
                 alt="${item.answer}" width="134" height="134">
            ${item.answer}
          </label>
        </div>`;
  }).join(``);

  const template = `<section class="main main--level main--level-artist">
    ${getStateTemplate(state)}
    <div class="main-wrap">
      ${title}
      ${getPlayerTemplate(question.audioSrc)}
      <form class="main-list">
        ${answersList}
      </form>
    </div>
  </section>`;

  const screen = getElementbyTemplate(template);

  const answers = screen.querySelectorAll(`.main-answer-r`);

  const answerClickHandler = (evt) => {
    console.log(evt.target.value);
    process();
  };

  answers.forEach((item) => {
    item.addEventListener(`click`, answerClickHandler);
  });

  return screen;
};


