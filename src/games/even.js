import getRandomNumber from '../utilities';
import runGame from '..';

const isEven = (number) => number % 2 === 0;
const gameDiscription = 'Answer "yes" if number even otherwise answer "no"';

const playIsEvenGame = () => {
  const question = getRandomNumber();
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => runGame(gameDiscription, playIsEvenGame);
