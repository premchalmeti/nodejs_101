const express = require('express')

const app = express()

// middlewares
// app.use() -> register middleware

// parse application/x-www-form-urlencoded
// 1. third party middlewares
app.use(express.urlencoded({extended: false}))

// parse application/json
app.use(express.json())

// 2. application level custom middleware
app.use(function(req, res, next) {
    res.write('Hey from stacked application middleware1\n');
    next();
}, function(req, res, next) {
    // can defined multiple middlewares one after another
    res.write('Hey from stacked application middleware2\n');
    next()
})

// 3. path level middlewares
app.use('/api/employee', function(req, res, next) {
    res.write('Hey from router middleware3\n');
    next()
})

// 4.error middleware
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.post('/api/employee/', (req, res)=>{
    console.log('request data', req.query, req.params, req.body);
    if (req.query.throw==1)
        throw new Error("Exception from Employee details");
    res.end('Finally in the API');
})

app.get('/api/employee/:id/', (req, res)=>{
    console.log('request data', req.query, req.params, req.body);
    if (req.query.throw==1)
        throw new Error("Exception from Employee details");
    res.end('Finally in the API');
})

app.listen(8080)
