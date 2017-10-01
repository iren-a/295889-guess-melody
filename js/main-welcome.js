import {getElementbyTemplate, renderScreen} from "./utils";
import {playButton} from "./main";
import mainLevelArtist from "./main-level-artist";
import mainLevelGenre from "./main-level-genre";

const template = document.querySelector(`#templates`).content.querySelector(`.main--welcome`).outerHTML;

const mainWelcomeElement = getElementbyTemplate(template);

const answers = document.querySelectorAll(`.main-answer`);

const answerClickHandler = (evt) => {
  renderScreen(mainLevelGenre);
};

answers.forEach((item) => {
  item.addEventListener(`click`, answerClickHandler);
});

const playButtonClickHandler = (evt) => {
  renderScreen(mainLevelArtist);
};

playButton.addEventListener(`click`, playButtonClickHandler);


export default mainWelcomeElement;
