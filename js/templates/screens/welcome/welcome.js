import WelcomeView from "./welcome-view";
import GameTimer from '../../../data/game-timer';
import switchScreen from "../../../utils/switch-screen";
import renderScreen from "../../../utils/render-screen";

export default class Welcome {
  constructor(state) {
    this.state = state;
    this.view = new WelcomeView();

    this.view.playButtonClickHandler = () => {
      this.onStartGame();
    };
  }

  init() {
    renderScreen(this.view.element);
  }

  onStartGame() {
    this.state.timer = new GameTimer(this.state.time);
    this.state.timer.start();
    switchScreen(this.state);
  }
}
