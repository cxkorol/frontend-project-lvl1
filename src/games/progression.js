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

const makeProgressionGame = () => {
  const first = getRandomNumber();
  const step = getRandomNumber();
  const hiddenPosition = getRandomNumber(0, length - 1);
  const progression = makeProgression(first, step, length);

  const rightAnswer = progression[hiddenPosition];
  progression[hiddenPosition] = '..';
  const question = progression.join(' ');

  return [question, rightAnswer.toString()];
};

export default () => runGame(gameDescription, makeProgressionGame);
