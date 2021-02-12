const {
    createLogger,
    transports,
    format
} = require('winston');

const logger = createLogger({
    transports: [
        new transports.Console({
            level: 'info',
        })
    ]
})

logger.info(`Winston logger`);
logger.warn(`Winston logger`);
logger.error(`Winston logger`);

module.exports = logger;