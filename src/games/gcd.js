import getRandomNumber from '../utilities';
import startGame from '..'

const gcdOfTwoNumbers = (number1, number2) => {
    while(number2) {
        let temp = number2;
        number2 = number1 % number2;
        number1 = temp;
    }
    return number1;
};
const gameDiscription = 'Find the greatest common divisor of given numbers.';

const makeQuest = () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const question = `Find the GCD between ${number1} & ${number2}`;
    const rightAnswer = gcdOfTwoNumbers(number1, number2);

    return [question, rightAnswer.toString()];
}

export default () => startGame(gameDiscription, makeQuest);