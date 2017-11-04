import Loader from "../../../loader";
import ResultWinView from "./result-win-view";
import switchScreen from "../../../utils/switch-screen";
import renderScreen from "../../../utils/render-screen";
import getStatistic from "../../../utils/get-statistic";

export default class ResultWin {
  constructor(state) {
    this.state = state;
  }

  init() {
    Loader.loadResults().then((loadedResults) => {
      const view = new ResultWinView(this.state, getStatistic(loadedResults));

      view.replayButtonClickHandler = () => {
        switchScreen();
      };

      renderScreen(view.element);
    });
  }
}
