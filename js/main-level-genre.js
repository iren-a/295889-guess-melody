import {getElementbyTemplate} from "./utils";

const template = document.querySelector(`#templates`).content.querySelector(`.main--level-genre`).outerHTML;;

const mainLevelGenre = getElementbyTemplate(template);

export default mainLevelGenre;
