import getRandomNumber from '../utilities';
import startGame from '..';

const gcdOfTwoNumbers = (number1, number2) => {
  let first = number1;
  let second = number2;

  while (second) {
    const temp = second;
    second = first % second;
    first = temp;
  }
  return first;
};
const gameDiscription = 'Find the greatest common divisor of given numbers.';

const makeQuest = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `Find the GCD between ${number1} & ${number2}`;
  const rightAnswer = gcdOfTwoNumbers(number1, number2);

  return [question, rightAnswer.toString()];
};

export default () => startGame(gameDiscription, makeQuest);
