// positional: hello [name] => Hello prem
// command: server --host --port
// option: --time
// alias: --help => -h
// 

// Refer:
// making executable: https://stackabuse.com/how-to-create-a-node-js-cli-application/
// > npm install -g .

// yargs: https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/


const cli = function() {
    const yargs = require('yargs');

    const cmd = yargs
    .scriptName('cmd-args')
    .usage('$0 <cmd> [args]')
    .command('greet [msg] [name]', 'Welcome to cmdline', (yargs) => {
        yargs.positional('msg', {
            type: 'string',
            default: 'Hello',
            description: 'The msg to use for greeting'
        })
        yargs.positional('name', {
            type: 'string',
            default: 'Macha',
            description: 'The name to greet'
        })
    }, function(argv) {
        console.log(`${argv.msg} ${argv.name}`);
    }).help().alias('help', 'h')

    console.log(cmd.argv);
}

module.exports.cli = cli;
