import getRandomNumber from '../utilities';
import startGame from '..';

const isPrime = (number) => {
  if (number <= 1) return false;
  if (number === 2) return true;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const gameDiscription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const makeQuest = () => {
  const number = getRandomNumber();
  const question = number;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => startGame(gameDiscription, makeQuest);
