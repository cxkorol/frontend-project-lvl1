import readlineSync from 'readline-sync';

const attempts = 3;

const startGame = (gameDiscription, questionGenerator) => {
    console.log('Welcome to the Brain Games!');
    console.log(`${gameDiscription}\n`)

    const userName = readlineSync.question('What is your name, %username: ');
    console.log(`You are welcome ${userName}`)

    for (let i = 0; i < attempts; i++) {
        const questionAnswer = questionGenerator();
        const [question, answer] = questionAnswer;

        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question(`Your answer, ${userName}: `);

        if (userAnswer === answer) {
            console.log('Correct');
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer is ${answer}`);
            console.log(`Let's try again, ${userName}`)
        }
    }

    console.log(`Congratulations, ${userName}, your Game is finished!`);
}

export default startGame;
