import {settings} from '../data/game-options';
import convertTime from '../utils/convert-time';

class TimerView {
  get template() {
    return `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
              <circle
                cx="390" cy="390" r="370"
                class="timer-line"
                style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center">
              </circle>
              <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
                <span class="timer-value-mins"></span><!--
                --><span class="timer-value-dots">:</span><!--
                --><span class="timer-value-secs"></span>
              </div>
            </svg>`;
  }

  updateTime(time) {
    const convertedTime = convertTime(time);

    document.querySelector(`.timer-value-mins`).innerText = convertedTime.minutes;
    document.querySelector(`.timer-value-secs`).innerText = convertedTime.seconds;

    if (time <= settings.minTimeDanger) {
      document.querySelector(`.timer-value`).classList.add(`timer-value--finished`);
    }
  }
}

export default TimerView;
