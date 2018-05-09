const { sendDM } = require('../modules/slack')

module.exports = app => {
  app.post('/action', async (req, res) => {
    const { text, user_id } = req.body
    res.send('Wee alrighty then!')
  })
}

