import getRandomNumber from '../utilities';
import runGame from '..';

const makeProgression = (first, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(first + step * i);
  }
  return progression;
};

const gameDescription = 'What number is missing in the progression?';
const length = 10;

const playProgressionGame = () => {
  const firstElementOfProgression = getRandomNumber();
  const step = getRandomNumber();
  const position = getRandomNumber(0, length - 1);
  const progression = makeProgression(firstElementOfProgression, step, length);

  const rightAnswer = progression[position];
  progression[position] = ' .. ';
  const question = progression.join(' ');

  return [question, rightAnswer.toString()];
};

export default () => runGame(gameDescription, playProgressionGame);
