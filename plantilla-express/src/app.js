const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const router = require('./router/index.router.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())

router(app)

module.exports = app