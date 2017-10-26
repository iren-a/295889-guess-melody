import LevelGenreView from "./level-genre-view";
import switchScreen from "../../../utils/switch-screen";
import processingAnswer from "../../../utils/processing-answer";

export default (state, question) => {
  const screen = new LevelGenreView(state, question);

  screen.answerClickHandler = (evt, answers, button) => {
    const isSomeAnswerSelected = () => {
      return Array.from(answers).some((item) => item.checked);
    };
    button.disabled = !isSomeAnswerSelected();
  };

  screen.buttonClickHandler = (evt, answers) => {
    evt.preventDefault();
    processingAnswer(Array.from(answers).filter((item) => {
      return item.checked;
    }).map((item) => {
      return item.value;
    }), question);
    switchScreen();
  };

  return screen.element;
};
