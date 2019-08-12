import getRandomNumber from '../utilities';
import startGame from '..'

const isEven = number => (number % 2 === 0);
const gameDiscription = 'Answer "yes" if number even otherwise answer "no"';

const makeQuest = () => {
    const number = getRandomNumber();
    const question = number;
    const rightAnswer = isEven(number) ? 'yes' : 'no';

    return [question, rightAnswer];
}

export default () => startGame(gameDiscription, makeQuest);