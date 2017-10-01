import {getElementbyTemplate} from "./utils";

const template = document.querySelector(`#templates`).content.querySelectorAll(`.main--result`)[1].outerHTML;;

const mainResultTimeOver = getElementbyTemplate(template);

export default mainResultTimeOver;
