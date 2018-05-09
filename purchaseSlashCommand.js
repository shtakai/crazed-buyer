const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const config = require('./config')
const { sendDM } = require('./modules/slack')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/purchase', async (req, res) => {
  console.log(req.body)
  const { text, user_id } = req.body
  res.send(
    {
      text: `
      Thank you for purchase request. *${text}*. We will message the boss now for authorization.`
    },
  )

  sendDM(
    config.ceoId,
    `Hi! *<@${user_id}>* would like to order *${text}*. Do you authorize this purchase request?`,
    [
      {
        text: "Do you authorize request?",
        actions: [
          {
            "name": "purchase_request",
            "text": "Yes I approve",
            "type": "button",
            "value": "approved"
          },
          {
            "name": "purchase_request",
            "text": "No",
            "type": "button",
            "value": "declined"
          },
        ],
      },
    ]
  )
})

const PORT = 9999
app.listen(PORT, () => {
  console.log(`Slack bot server has started on port ${PORT}`)
})
