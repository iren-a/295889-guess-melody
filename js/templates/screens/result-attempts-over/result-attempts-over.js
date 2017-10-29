import ResultAttemptsOverView from "./result-attempts-over-view";
import switchScreen from "../../../utils/switch-screen";
import renderScreen from "../../../utils/render-screen";

export default class ResultAttemptsOver {
  constructor() {
    this.view = new ResultAttemptsOverView();

    this.view.replayButtonClickHandler = () => {
      switchScreen();
    };
  }

  init() {
    renderScreen(this.view.element);
  }
}
