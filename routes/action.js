const { sendDM } = require('../modules/slack')

module.exports = app => {
  app.post('/action', async (req, res) => {
    const interactiveMessage = JSON.parse(req.body.payload)
    // console.log(interactiveMessage)
    res.json({
      text: interactiveMessage.original_message.text,
      attachments: [
        {
          text: interactiveMessage.actions[0].value === 'approved'
            ? 'You approved this purchase request'
            : 'You declined this purchase request'
        }
      ]
    })
  })
}

