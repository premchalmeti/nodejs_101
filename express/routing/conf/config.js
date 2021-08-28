const path = require('path');


const production = {
    LOGGING_LEVEL: process.env.LOG_LEVEL || 'info',
    HOST: '0.0.0.0',
    PORT: 5000,
    LOG_LOCATION: 'logs',
    app_name: 'routing',
    ENV: 'prod',
    get ERROR_LOG_FILE_PATH(){
        return path.join(this.LOG_LOCATION, 'error.log');
    },
    get COMBINED_LOG_FILE_PATH(){
        return path.join(this.LOG_LOCATION, 'combined.log');
    },
    
}


const development = {
    ...production,
    ENV: 'dev'
}


module.exports = process.env.ENV == 'dev'? development: production;
