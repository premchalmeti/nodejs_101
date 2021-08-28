const {createLogger, format, transports} = require('winston');
const {combine, timestamp, label, printf} = format;
const conf = require('./conf/config');

const logFmt = printf(({level, message, label, timestamp}) => {
    return `${timestamp} | ${label} | ${level} | ${message}`;
})

// should be file transport in production
const consoleTransport = new transports.Console();
const errorFileTransport = new transports.File({
    filename: conf.ERROR_LOG_FILE_PATH,
    level: 'error'
})
const combinedFileTransport = new transports.File({
    filename: conf.COMBINED_LOG_FILE_PATH
})
// const remoteLog = new transports.Http({
//     host: 'localhost',
//     port: 3001,
//     path: '/errors'
// })
const logger = new createLogger({
    level: conf.LOGGING_LEVEL,
    format: combine(
        label({label: conf.app_name}),
        timestamp(),
        logFmt
    ),
    transports: [errorFileTransport, combinedFileTransport]
});

if(conf.ENV !== 'prod') {
    logger.add(consoleTransport);
}

module.exports = logger;
