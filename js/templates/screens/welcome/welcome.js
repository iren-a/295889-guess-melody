import WelcomeView from "./welcome-view";
import switchScreen from "../../../utils/switch-screen";

export default () => {
  const screen = new WelcomeView();

  screen.playButtonClickHandler = () => {
    switchScreen();
  };

  return screen.element;
};

