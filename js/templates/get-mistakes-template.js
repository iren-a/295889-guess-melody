export default (mistakesCount) => {

  return `<div class="main-mistakes">
      ${`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`.repeat(mistakesCount)}
    </div>`;

};
