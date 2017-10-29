export default class Timer {
  constructor(time) {
    this.time = time;
  }

  tick() {
    if (this.time <= 0) {
      return -1;
    }

    this.time -= 1000;

    return this.time;
  }
}
