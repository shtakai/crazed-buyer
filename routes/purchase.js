const config = require('../config')
const { sendDM } = require('../modules/slack')
const { savePurchaseRequest } = require('../modules/database')

module.exports = app => {
  app.post('/purchase', async (req, res) => {
    const { text, user_id } = req.body
    res.send(
      {
        text: `
      Thank you for purchase request. *${text}*. We will message the boss now for authorization.`
      },
    )

    await savePurchaseRequest(
      user_id,
      text
    )

    sendDM(
      config.ceoId,
      `Hi! *<@${user_id}>* would like to order *${text}*. Do you authorize this purchase request?`,
      [
        {
          text: "Do you authorize request?",
          callback_id: 'purchase_request',
          actions: [
            {
              "name": "auth_button",
              "text": "Yes I approve",
              "type": "button",
              "value": "approved"
            },
            {
              "name": "auth_button",
              "text": "No",
              "type": "button",
              "value": "declined"
            },
          ],
        },
      ]
    )
  })
}
