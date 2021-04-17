
const os = require('os');


const user = os.userInfo();

console.log(`Platform: `, os.platform(), 'Logged in username: ', user.username);


console.log('System uptime: ', os.uptime());

console.log('OS: ', os.type(), '\nRelease: ', os.release());
console.log('FreeMem: ', os.freemem(), '\nTotal: ', os.totalmem());

