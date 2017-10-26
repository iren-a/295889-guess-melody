import LevelArtistView from "./level-artist-view";
import switchScreen from "../../../utils/switch-screen";
import processingAnswer from "../../../utils/processing-answer";

export default (state, question) => {
  const screen = new LevelArtistView(state, question);

  screen.answerClickHandler = (evt) => {
    processingAnswer([evt.target.value], question);
    switchScreen();
  };

  return screen.element;
};
