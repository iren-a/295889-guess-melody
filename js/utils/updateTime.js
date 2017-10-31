import {settings} from '../data/game-options';
import convertTime from './convert-time';

export default (time) => {
  const convertedTime = convertTime(time);

  document.querySelector(`.timer-value-mins`).innerText = convertedTime.minutes;
  document.querySelector(`.timer-value-secs`).innerText = convertedTime.seconds;

  if (time <= settings.minTimeDanger) {
    document.querySelector(`.timer-value`).classList.add(`timer-value--finished`);
  }
};
