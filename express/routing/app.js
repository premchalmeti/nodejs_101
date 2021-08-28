// buil-in imports
const path = require('path');

// third-party imports
const express = require('express');

// custom imports
const employeeRoutes = require('./routes/employees');
const logger = require('./logger');
const conf = require('./conf/config');


const app = express();


app.set('view engine', 'pug');
app.use('/static', express.static('public'));


// for post requests
app.use(express.json());


// info logger
app.use(function(req, res, next) {
    logger.info(`URL HIT: ${req.url}`);
    next();
})

app.use('/api/employees', employeeRoutes);


app.get('*', (req, res, next)=>{
    logger.error(`PATH NOT FOUND: ${req.url}`);
    next();
});


// error logger
app.use(function(err, req, res, next){
    logger.error(err);
    res.json(err.status || 500, {ERROR: 'Internal server error.'});
})

app.listen(conf.PORT, conf.HOST, () => {
    logger.info(`MODE: ${conf.ENV}`);
    logger.info(`Server running on ${conf.HOST}:${conf.PORT}`);
})
