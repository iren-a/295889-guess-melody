import ResultWinView from "./result-win-view";
import switchScreen from "../../../utils/switch-screen";

export default (state, statistics) => {
  const screen = new ResultWinView(state, statistics);

  screen.replayButtonClickHandler = () => {
    switchScreen();
  };

  return screen.element;
};

