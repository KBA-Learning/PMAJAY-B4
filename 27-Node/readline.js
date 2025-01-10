const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your Name ', (name) => {
    console.log(`Your Name is ${name}.`);
    rl.close();
});