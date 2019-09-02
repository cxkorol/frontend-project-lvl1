import getRandomNumber from '../utilities';
import runGame from '..';

const isPrime = (number) => {
  const num = Math.abs(number);
  if (num === 0 || num === 1) return false;
  const maxFactorNum = Math.sqrt(number);
  for (let i = 2; i <= maxFactorNum; i += 1) {
    if (num % i === 0) return false;
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
