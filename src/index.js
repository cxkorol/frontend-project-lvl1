import readlineSync from 'readline-sync';

const greeting = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('What is your name, %username: ');
    console.log(`You are welcome, ${name}!`);
};

export default greeting;
