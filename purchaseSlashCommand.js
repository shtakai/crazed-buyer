const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const config = require('./config')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./routes/purchase')(app)

const PORT = config.port
app.listen(PORT, () => {
  console.log(`Slack bot server has started on port ${PORT}`)
})
