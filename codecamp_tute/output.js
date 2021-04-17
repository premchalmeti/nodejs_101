const chalk = require("chalk");
const ProgressBar = require('progress');

var username = 'Premkumar';

// available method
// "debug", "error", "info", "log", "warn", "dir", 
// "dirxml", "table", "trace", "group", "groupCollapsed", 
// "groupEnd", "clear", "count", "countReset", "assert", 
// "profile", "profileEnd", "time", "timeLog", "timeEnd", 
// "timeStamp", "context", "memory"


console.log('This is the console log', username);

// "Prem": 1
console.count('Prem')
// "Prem": 2
console.count('Prem')
// "Prem": 3
console.count('Prem')

// prints 1
console.count('Vishal')

// start from 1
console.count('Prem')


// start the timer
console.time('For each loop');

["Apple", "Mangoes", "Oranges"].forEach((v, i) => {
    console.log(v, i);
});

console.timeEnd('For each loop');

console.log(chalk.blue("Hi!"), chalk.yellow('Prem'));

const bar = new ProgressBar(':bar', { total: 100})
const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        clearInterval(timer);
    }
}, 100);
