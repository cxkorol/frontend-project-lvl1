import runGame from '..';
import getRandomNumber from '../utilities';

const gameDescription = 'What is the result of the expression?';
const mathOperations = ['+', '-', '*'];

const makeCalculateGame = () => {
  const mathOperation = mathOperations[getRandomNumber(0, mathOperations.length - 1)];
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${mathOperation} ${number2}`;
  let answer = '';

  switch (mathOperation) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    default:
      return null;
  }

  return [question, answer.toString()];
};

export default () => runGame(gameDescription, makeCalculateGame);
