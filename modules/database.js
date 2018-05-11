const admin = require('firebase-admin')

const config = require('../config')
const serviceAccounts = require('../keys/firebase-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccounts),
  databaseURL: config.databaseURL,
})

const db = admin.database()

const savePurchaseRequest = async (userId, items) => {
  const ref = db.ref(config.database)
  ref.push({
    userId,
    items,
  })
}

module.exports = {
  savePurchaseRequest,
}
