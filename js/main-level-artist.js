import {getElementbyTemplate, renderScreen} from "./utils";

const template = document.querySelector(`#templates`).content.querySelector(`.main--level-artist`).outerHTML;;

const mainLevelArtist = getElementbyTemplate(template);

export default mainLevelArtist;
