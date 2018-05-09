const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/purchase', async (req, res) => {
  console.log(req.body)
  res.send(
     {text: "Thank you for purchase request." },
  )
})

const PORT = 9999
app.listen(PORT, () => {
  console.log(`Slack bot server has started on port ${PORT}`)
})
