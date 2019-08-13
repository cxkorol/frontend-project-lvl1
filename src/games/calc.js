import startGame from '..';
import getRandomNumber from '../utilities';

const gameDiscription = 'What is the result of the expression?';
const mathOperationsArr = ['+', '-', '*'];

const startCalculate = () => {
  const mathOper = mathOperationsArr[getRandomNumber(0, mathOperationsArr.length - 1)];
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${mathOper} ${number2}`;
  let answer = '';

  switch (mathOper) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    default:
      answer = number1 * number2;
  }

  return [question, answer.toString()];
};

export default () => startGame(gameDiscription, startCalculate);
