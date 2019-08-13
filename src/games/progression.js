import getRandomNumber from '../utilities';
import startGame from '..'

const makeProgression = (first, step, length) => {
    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(first + step * i);
    }
    return progression;
};
const gameDiscription = 'What number is missing in the progression?';
const length = 10;

const makeQuest = () => {
    const number = getRandomNumber();
    const step = getRandomNumber();
    const position = getRandomNumber(0, length - 1);
    const progression = makeProgression(number, step, length);
    
    const rightAnswer = progression[position];
    progression[position] = ' ? ';
    const question = progression.join(' ');

    return [question, rightAnswer.toString()];
}

export default () => startGame(gameDiscription, makeQuest);