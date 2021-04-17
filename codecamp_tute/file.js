const path = require('path');


const inputFile = path.join(__dirname, 'input.txt');

console.log(path.sep, inputFile);

console.log(path.basename(inputFile));

const abso = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(abso);
