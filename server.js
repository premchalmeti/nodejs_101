const http = require('http');
const console = require('console');
const marked = require('marked');
const fs = require('fs');
const events = require('events');


const HOST='127.0.0.1',
      PORT = 8080;


const eventEmitter = new events.EventEmitter();


function renderMarkdownToHtml(mdData){
    return marked(mdData);
}


function createLog(event) {
    console.log('Event called', event);
}


eventEmitter.on('addLog', createLog);


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // console.log(req.headers);
    // console.log(http.Agent);
    // res.write(req.headers);

    var options = {
        'host': 'www.geeksforgeeks.org',
        'path': '/courses',
        'method': 'GET'
    }
   
    http.request(options, (response)=>{
        console.log('res', response.statusCode, response.statusMessage);
    }).end();

    setTimeout(()=>{
        for(var i=0;i<100;i++) {
            console.log('print', i);
        }
    }, 0);

    // tick: event loop full trip eventQ->callstack->browserapi->eventQ
    // asynchronous processing: after current operation without queing
    process.nextTick(() => {
        console.log('Next ticking');
    });

    // by node.js: before timeout 0
    setImmediate(()=>{
        console.log('Immediate');
    });

    // executed after call stack empty
    setTimeout((no1, no2)=>{
        console.log(no1+no2, 'Timeout');
    }, 0, 1, 2);

    const timerId = setInterval((no1, no2)=>{
        console.log(no1+no2)
    }, 10, 2, 3);

    clearInterval(timerId);

    fs.readFile('response.md', 'utf8', (err, mdData) => {
        if(err) throw err;

        res.setHeader('Content-Type', 'text/html');
        res.write(renderMarkdownToHtml(mdData));
        eventEmitter.emit('addLog');
        res.end();
    });
});


server.listen(PORT, HOST, () => {
    console.log(`Server running at ${HOST}:${PORT}/`);
});
