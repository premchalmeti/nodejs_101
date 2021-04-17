// async, await
// promises
// q objects


// callbacks add levels of nesting which results in callback hell
// cb1.on('event1', ()=>{
//     cb2.on('event2', ()=>{
//         cb3.on('event3', ()=>{
//             cb4.on('event4', ()=>{

//             })
//         })
//     })
// })

// to deal with callback hell promises(es6) and async-await(es2017) are defined

// promises: everything boils down to promises
// accepts success and error callback
// to process promiseObj .then(successCb, errorCb) or .then(successCb).catch(errorCb)
// promise states
// pending state: when promise called
// resolved: when promise done executing successfully
// rejected: error occured while execution


// async functions are defined using async keyword
// await is pre-pended before calling any async function
// await process promise returned by js
// async-await resolves the callback hell problem
// async functions use promises behind the scenes

// q conventient wrapper around promises
// defer = q.defer()
// q.resolve()
// q.reject()
// return defer


// std practice for creating callbacks to any function is
const fs = require('fs');
// fs.readFile('docs/notes.txt', (err, data) => {
//      if (err !== null) {
//             console.error(err);
//             return;
//      }
//      console.log(data.toString());
// })

// custom promise
function validateFile(fileName){
    allowedExtensions = ['jpg', 'txt'];
    return new Promise((resolveCb, rejectCb) => {
        extension = fileName.split('.')[1];
        if(allowedExtensions.includes(extension)) {
            resolveCb(true);
        } else {
            rejectCb(false);
        }
    });
}

cb = (status)=>{console.log(status)};

validateFile('abc.txt').then(cb, cb);

