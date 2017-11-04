export default (results) => {
  const statistic = results.map((item) => {
    return item.score;
  });
  return statistic;
};
