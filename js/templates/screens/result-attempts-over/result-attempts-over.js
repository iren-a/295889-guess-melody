import ResultAttemptsOverView from "./result-attempts-over-view";
import switchScreen from "../../../utils/switch-screen";

export default () => {
  const screen = new ResultAttemptsOverView();

  screen.replayButtonClickHandler = () => {
    switchScreen();
  };

  return screen.element;
};


