const fs = require('fs')


function writeDataToFile(fileName, content) {
    fs.writeFileSync(fileName, JSON.stringify(content, null, 2), 'utf8', (err) => {
        console.error(err);
    })
}


module.exports = {writeDataToFile};
