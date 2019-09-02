import getRandomNumber from '../utilities';
import runGame from '..';

const greatestCommonDivisor = (number1, number2) => {
  let first = number1;
  let second = number2;

  while (second) {
    const temp = second;
    second = first % second;
    first = temp;
  }
  return first;
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const makeGcdGame = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} & ${number2}`;
  const rightAnswer = greatestCommonDivisor(number1, number2);

  return [question, rightAnswer.toString()];
};

export default () => runGame(gameDescription, makeGcdGame);
