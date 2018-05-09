const { sendDM } = require('../modules/slack')

module.exports = app => {
  app.post('/action', async (req, res) => {
    const interactiveMessage = JSON.parse(req.body.payload)
    const requestApproved = interactiveMessage.actions[0].value === 'approved'
    const originalTextMessage = interactiveMessage.original_message.text

    res.json({
      text: originalTextMessage,
      attachments: [
        {
          text: requestApproved
            ? 'You approved this purchase request'
            : 'You declined this purchase request'
        }
      ]
    })

    const matches = originalTextMessage.match(/@(.+)>.+\*(.+)\*/)
    console.log(matches)
    const userId = matches[1]
    const message = matches[2]
    const approved = requestApproved ? 'approved' : 'denied'

    sendDM(
      userId,
      `Hi! Your fucked up purchase request for *${
        message
      }* was *${
        approved
      }*.`
    )
  })
}

