import ResultWinView from "./result-win-view";
import switchScreen from "../../../utils/switch-screen";
import renderScreen from "../../../utils/render-screen";

export default class ResultWin {
  constructor(state) {
    this.state = state;
    this.view = new ResultWinView(this.state);

    this.view.replayButtonClickHandler = () => {
      switchScreen();
    };
  }

  init() {
    renderScreen(this.view.element);
  }
}
