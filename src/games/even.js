import getRandomNumber from '../utilities';
import runGame from '..';

const isEven = (number) => number % 2 === 0;
const gameDescription = 'Answer "yes" if number even otherwise answer "no"';

const makeEvenGame = () => {
  const question = getRandomNumber();
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => runGame(gameDescription, makeEvenGame);
