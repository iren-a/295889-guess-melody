import ResultTimeOverView from "./result-time-over-view";
import switchScreen from "../../../utils/switch-screen";
import renderScreen from "../../../utils/render-screen";

export default class ResultTimeOver {
  constructor() {
    this.view = new ResultTimeOverView();

    this.view.replayButtonClickHandler = () => {
      switchScreen();
    };
  }

  init() {
    renderScreen(this.view.element);
  }
}
