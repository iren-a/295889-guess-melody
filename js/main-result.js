import {getElementbyTemplate} from "./utils";

const template = document.querySelector(`#templates`).content.querySelectorAll(`.main--result`)[0].outerHTML;;

const mainResult = getElementbyTemplate(template);

export default mainResult;
