import getRandomNumber from '../utilities';
import runGame from '..';

const isPrime = (number) => {
  if (number < 1) return false;
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const makePrimeGame = () => {
  const question = getRandomNumber();
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => runGame(gameDescription, makePrimeGame);
