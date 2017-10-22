import assert from "assert";
import getScore from "./get-score";

describe(`Function getScore`, () => {

  it(`should return -1 when the player answered less than 10 questions`, () => {

    let answers = [
      {isCorrect: true, time: 10000}
    ];
    let attemptsLeft = 3;
    assert.equal(getScore(answers, attemptsLeft), -1);

    attemptsLeft = 0;
    assert.equal(getScore(answers, attemptsLeft), -1);
  });

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
    let attemptsLeft = 3;
    assert.equal(getScore(answers, attemptsLeft), 20);
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
    let attemptsLeft = 3;
    assert.equal(getScore(answers, attemptsLeft), 10);
  });

});
