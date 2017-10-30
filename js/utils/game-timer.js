import Timer from './timer';

export default class GameTimer {
  constructor(time) {
    this.timer = new Timer(time);
    this.timerInterval = null;
    this.time = time;
  }

  get value() {
    return this.time;
  }

  start() {
    this.timerInterval = setInterval(() => {
      this.time = this.timer.tick();

      if (this.time === 0) {
        this.stop();
      }

      this.onTick(this.time);
    }, 1000);
  }

  stop() {
    clearInterval(this.timerInterval);
  }

  onTick() {}
}
