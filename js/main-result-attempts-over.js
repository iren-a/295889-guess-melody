import {getElementbyTemplate} from "./utils";

const template = document.querySelector(`#templates`).content.querySelectorAll(`.main--result`)[2].outerHTML;;

const mainResultAttemptsOver = getElementbyTemplate(template);

export default mainResultAttemptsOver;
