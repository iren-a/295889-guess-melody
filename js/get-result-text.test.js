import assert from "assert";
import getResultText from "./get-result-text";

describe(`Function getResultText`, () => {

  it(`should return right text when the player lost and the time ran out`, () => {

    let statistics = [1, 2, 3, 4, 5];
    let result = {
      score: 10,
      attemptsLeft: 3,
      timeLeft: 0
    };
    assert.equal(getResultText(statistics, result), `Время вышло! Вы не успели отгадать все мелодии`);
  });

  it(`should return right text when the player lost and attempts to end`, () => {

    let statistics = [1, 2, 3, 4, 5];
    let result = {
      score: 10,
      attemptsLeft: 0,
      timeLeft: 1000
    };
    assert.equal(getResultText(statistics, result), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });

  it(`should return right text when the player won`, () => {

    let statistics = [5, 3, 2, 1];
    let result = {
      score: 4,
      attemptsLeft: 3,
      timeLeft: 1000
    };
    assert.equal(getResultText(statistics, result), `Вы заняли 2 место из 5 игроков. Это лучше чем у 60% игроков`);

    statistics = [1, 2, 3, 5];
    result = {
      score: 4,
      attemptsLeft: 3,
      timeLeft: 1000
    };
    assert.equal(getResultText(statistics, result), `Вы заняли 2 место из 5 игроков. Это лучше чем у 60% игроков`);

    statistics = [];
    result = {
      score: 4,
      attemptsLeft: 3,
      timeLeft: 1000
    };
    assert.equal(getResultText(statistics, result), `Вы заняли 1 место из 1 игроков. Это лучше чем у 0% игроков`);

    statistics = [5, 4, 3, 3];
    result = {
      score: 3,
      attemptsLeft: 3,
      timeLeft: 1000
    };
    assert.equal(getResultText(statistics, result), `Вы заняли 5 место из 5 игроков. Это лучше чем у 0% игроков`);

  });
});

