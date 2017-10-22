import getElementbyTemplate from "../../utils/get-element-by-template";
import switchScreen from "../../utils/switch-screen";
import processingAnswer from "../../utils/processing-answer";
import getStateTemplate from "../get-state-template";
import getPlayerTemplate from "../get-player-template";

export default (state, question) => {

  const title = `<h2 class="title main-title">${question.title}</h2>`;

  const answersList = question.answerList.map((item, i) => {
    return `<div class="genre-answer">
          ${getPlayerTemplate(item.answer)}
          <input type="checkbox" name="answer" value="${item.answer}" id="a-${i + 1}">
          <label class="genre-answer-check" for="a-${i + 1}"></label>
        </div>`;
  }).join(``);

  const template = `<section class="main main--level main--level-genre">
   ${getStateTemplate(state)}
    <div class="main-wrap">
      ${title}
      <form class="genre">
        ${answersList}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;

  const screen = getElementbyTemplate(template);

  const button = screen.querySelector(`.genre-answer-send`);
  button.disabled = true;

  const answers = screen.querySelectorAll(`input[name="answer"]`);

  const isSomeAnswerSelected = () => {
    return Array.from(answers).some((item) => item.checked);
  };

  const answerClickHandler = () => {
    if (isSomeAnswerSelected()) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  };

  Array.from(answers).forEach((item) => {
    item.addEventListener(`click`, answerClickHandler);
  });

  const buttonClickHandler = (evt) => {
    evt.preventDefault();
    processingAnswer(Array.from(answers).filter((item) => {
      return item.checked;
    }).map((item) => {
      return item.value;
    }), question);
    switchScreen();
  };

  button.addEventListener(`click`, buttonClickHandler);

  return screen;

};
