import getRandomNumber from '../utilities';
import runGame from '..';

const isPrime = (number) => {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  return true;
};
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const playIsPrimeGame = () => {
  const question = getRandomNumber();
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => runGame(gameDescription, playIsPrimeGame);
