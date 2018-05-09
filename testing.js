const { sendDM } = require('./modules/slack')
const config = require('./config')

sendDM(config.dmTo, config.dmMessage)
