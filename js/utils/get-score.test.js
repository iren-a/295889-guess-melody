import assert from "assert";
import getScore from "./get-score";

describe(`Function getScore`, () => {

  it(`should return 20 when the player fast answered all questions without mistakes`, () => {

    let answers = [
      {isCorrect: true, time: 10000},
      {isCorrect: true, time: 10000},
      {isCorrect: true, time: 10000},
      {isCorrect: true, time: 10000},
      {isCorrect: true, time: 10000},
      {isCorrect: true, time: 10000},
      {isCorrect: true, time: 10000},
      {isCorrect: true, time: 10000},
      {isCorrect: true, time: 10000},
      {isCorrect: true, time: 10000}
    ];
    assert.equal(getScore(answers), 20);
  });

  it(`should return 10 when the player slow answered all questions without mistakes`, () => {

    let answers = [
      {isCorrect: true, time: 50000},
      {isCorrect: true, time: 50000},
      {isCorrect: true, time: 50000},
      {isCorrect: true, time: 50000},
      {isCorrect: true, time: 50000},
      {isCorrect: true, time: 50000},
      {isCorrect: true, time: 50000},
      {isCorrect: true, time: 50000},
      {isCorrect: true, time: 50000},
      {isCorrect: true, time: 50000}
    ];
    assert.equal(getScore(answers), 10);
  });

});
