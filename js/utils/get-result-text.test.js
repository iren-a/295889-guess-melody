import assert from "assert";
import getResultText from "./get-result-text";

describe(`Function getResultText`, () => {

  it(`should return right text when the player won`, () => {

    let statistics = [5, 3, 2, 1];
    let score = 4;
    assert.equal(getResultText(statistics, score), `Вы заняли 2 место из 5 игроков. Это&nbsp;лучше чем у&nbsp;60%&nbsp;игроков`);

    statistics = [1, 2, 3, 5];
    score = 4;
    assert.equal(getResultText(statistics, score), `Вы заняли 2 место из 5 игроков. Это&nbsp;лучше чем у&nbsp;60%&nbsp;игроков`);

    statistics = [];
    score = 4;
    assert.equal(getResultText(statistics, score), `Вы заняли 1 место из 1 игроков. Это&nbsp;лучше чем у&nbsp;0%&nbsp;игроков`);

    statistics = [5, 4, 3, 3];
    score = 3;
    assert.equal(getResultText(statistics, score), `Вы заняли 5 место из 5 игроков. Это&nbsp;лучше чем у&nbsp;0%&nbsp;игроков`);

  });
});

