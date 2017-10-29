export default (time) => {

  const addZeroToNumber = (number) => {
    if (number > 9) {
      return number.toString();
    } else {
      return `0` + number;
    }
  };

  return {
    minutes: addZeroToNumber(Math.floor(time / 1000 / 60)),
    seconds: addZeroToNumber(Math.floor((time / 1000) % 60))
  };
};
