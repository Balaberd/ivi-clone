const howMuchMovies = (num: number): string => {
  let postfix;

  const twoLastNumbers = `${num}`.slice(`${num}`.length - 2);
  const lastNumber =
    twoLastNumbers.length > 1 ? twoLastNumbers[1] : twoLastNumbers[0];

  const isMultipleGap = +twoLastNumbers >= 11 && +twoLastNumbers <= 14;

  if (+lastNumber === 1 && !isMultipleGap) {
    postfix = "";
  } else if (+lastNumber >= 2 && +lastNumber <= 4 && !isMultipleGap) {
    postfix = "а";
  } else {
    postfix = "ов";
  }
  return `${num} фильм${postfix}`;
};

export default howMuchMovies;
