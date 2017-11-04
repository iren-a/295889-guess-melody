export default (statistics, score) => {

  statistics.sort((left, right) => right - left);
  const countOfPlayers = statistics.length;
  const position = statistics.lastIndexOf(score) + 1;
  const percent = Math.round((countOfPlayers - position) / countOfPlayers * 100);

  return `Вы заняли ${position} место из ${countOfPlayers} игроков. Это&nbsp;лучше чем у&nbsp;${percent}%&nbsp;игроков`;

};
