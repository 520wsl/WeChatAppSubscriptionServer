// log4js 是一个 nodejs 日志管理工具，可以将日志以各种形式输出到各种渠道。
// import log4js from 'log4js';
var log4js = require('log4js');
//module.exports=log4js.getLogger('message');
var logger = log4js.getLogger();

logger.level = 'debug'; // default level is OFF - which means no logs at all.
module.exports =  logger