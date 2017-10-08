const getResultText = (statistics, result) => {
  if (result.timeLeft === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }
  if (result.attemptsLeft === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  statistics.push(result.score);
  statistics.sort((left, right) => right - left);
  const countOfPlayers = statistics.length;
  const position = statistics.lastIndexOf(result.score) + 1;
  const percent = (countOfPlayers - position) / countOfPlayers * 100;

  return `Вы заняли ${position} место из ${countOfPlayers} игроков. Это лучше чем у ${percent}% игроков`;

};

export default getResultText;
