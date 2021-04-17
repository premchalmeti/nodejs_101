const xmath = require('./xmath');

const rli = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// stdin input
function input(prompt) {
    return new Promise((callbackFn, errorFn) => {
        rli.question(prompt, (uinput)=> {
            callbackFn(uinput);
        }, ()=> {
            errorFn();
        });
    });
}

const main = async () => {
    no = await input("Enter the no to check: ");
    uname = await input("Enter your name: ");
    console.log(`Hey ${uname}, ${no} is`, xmath.isPrime(no)?'Prime':'Not Prime');
    rli.close();

    // cmdline args
    // positional args: accessed directly
    // keyword args: need to parse using libs [name=premkumar]
    // minimalist: 
    // yargs: https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
    console.log("Command line arguments");
    process.argv.forEach((val, index) => {
        console.log(`${index}: ${val}`)
    });
};

// ctrl+c => SIGINT
// ctrl+z => SIGTSTP
// 

process.on('SIGTERM', ()=>{
    console.log('handled termination');
})


main();



// readline events: close, line, history
rli.on('line', (event)=> {
    console.log('Readline got enter', event);
});

