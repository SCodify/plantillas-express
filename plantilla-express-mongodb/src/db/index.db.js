const { db } = require('../config/index.config')
const mongoose = require('mongoose')

const mongoUri = `mongodb+srv://${db.dbUser}:${db.dbPass}@${db.dbHost}/${db.dbName}`

const mongoConnect = async () => {
  try {
    await mongoose.connect(mongoUri)
    console.log('Base de datos conectada')
  } catch (error) {
    console.log(error);
  }
}

mongoConnect()

module.exports = mongoConnect