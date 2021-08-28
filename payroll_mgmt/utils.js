const fs = require('fs');


function writeDataToFile(fileName, content) {
    fs.writeFileSync(fileName, JSON.stringify(content, null, 2), 'utf8', (err) => {
        console.error(err);
    })
}


function getPostData(req) {
    return new Promise((r, e)=>{
        try {
            let body = "";

            req.on('data', chunk=>{
                body += chunk.toString();
            })

            req.on('end', ()=>{
                r(body);
            })
        } catch(exc) {
            e(exc)
        }
    })
}


module.exports = {writeDataToFile, getPostData}
