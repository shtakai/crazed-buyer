const admin = require('firebase-admin')

const config = require('../config')
const serviceAccount = require('./keys/firebase-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccounts),
  databaseURL: config.databaseURL,
})


const savePurchaseRequest = async (userId, items) => {

}
