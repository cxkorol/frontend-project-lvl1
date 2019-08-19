import readlineSync from 'readline-sync';

const attemptCount = 3;

const runGame = (gameDescription, playGameGenerator) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);

  const userName = readlineSync.question('What is your name, %username: ');
  console.log(`You are welcome, ${userName}`);

  for (let i = 0; i < attemptCount; i += 1) {
    const [question, answer] = playGameGenerator();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question(`Your answer, ${userName}: `);

    if (userAnswer !== answer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer is ${answer}`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!\n');
  }

  console.log(`Congratulations, ${userName}, your Game is finished!`);
};

export default runGame;
