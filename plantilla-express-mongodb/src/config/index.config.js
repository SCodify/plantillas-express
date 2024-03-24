require('dotenv').config()

module.exports = {
  port: process.env.PORT || 9000,
  db: {
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
  }
}