const { port } = require('./config/index.config')

const app = require('./app')

app.listen(port, () => {
  console.log(`El servidor se encuentra corriendo en el puerto ${port}`)
})