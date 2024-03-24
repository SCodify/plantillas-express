const testRouter = require('./test.router.js')

const router = (app) => {
  app.use('/api/test', testRouter)
}

module.exports = router