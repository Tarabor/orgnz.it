/* eslint-disable no-console */
const WINSTON = require('winston')

class WinstonLog {

  /** 
   * Create a new WINSTON logger stored in this
   * the transport is the default Console
   * the output format is json with timestamp
   * @param {string} level required, define the maximum level of messages that the transport will log
  */
  constructor (level) {

    if (level === undefined || level.length === 0)
      throw new Error('No level')
    // if (requestId === undefined || requestId.length === 0)
    //  throw new Error('No request ID ')
    
    this.logger = WINSTON.createLogger({
      // eslint-disable-next-line object-shorthand
      level      : level,
      format     : WINSTON.format.json(),
      transports : [
        new WINSTON.transports.Console()
      ]
    })
    // this.requestID  = requestId
    this.level      = level
  }

  /**
   * write onto the defined transport
   * @param {string} lvl required, define the message's level
   * @param {string} msg required, define the actual message
   * @param {*} json optional, can be a json object or an array, it stores every other field that might be needed
   */
  write (lvl, msg, json) {
    const w = {}
    w.level = lvl
    w.timestamp = new Date()
    w.message = {
      description : msg,
      object      : json
    }
    // w.requestId = this.requestID

    if (this.level === 'dev' && ['debug', 'warn', 'error', 'info'].includes(lvl))
      console.log(msg, (json) ? JSON.stringify(json) : '')
    else 
      this.logger.log(w)
  }

  /**
   * wrapping functions for the different levels
   * @param {string} msg required, define the actual message
   * @param {json} json optional, can be a json object or an array, it stores every other field that might be needed
   */
  error (msg, json) {
    this.write('error', msg, json)
  }

  warn (msg, json) {
    this.write('warn', msg, json)
  }

  info (msg, json) {
    this.write('info', msg, json)
  }

  verbose (msg, json) {
    this.write('verbose', msg, json)
  }

  debug (msg, json) {
    this.write('debug', msg, json)
  }

  silly (msg, json) {
    this.write('silly', msg, json)
  }

}

module.exports = WinstonLog