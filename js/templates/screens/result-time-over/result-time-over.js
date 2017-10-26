import ResultTimeOverView from "./result-time-over-view";
import switchScreen from "../../../utils/switch-screen";

export default () => {
  const screen = new ResultTimeOverView();

  screen.replayButtonClickHandler = () => {
    switchScreen();
  };

  return screen.element;
};
