const leftKeyCode = 37;
const rightKeyCode = 39;

import {renderScreen} from "./utils";
import mainWelcomeElement from "./main-welcome";

renderScreen(mainWelcomeElement);

export const playButton = document.querySelector(`.main-play`);
