import getRandomNumber from '../utilities';
import runGame from '..';

const findGcdOfTwoNumbers = (number1, number2) => {
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

const playGcdGame = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `Find the GCD between ${number1} & ${number2}`;
  const rightAnswer = findGcdOfTwoNumbers(number1, number2);

  return [question, rightAnswer.toString()];
};

export default () => runGame(gameDescription, playGcdGame);
