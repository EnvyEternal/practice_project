const http = require('http')
const express = require('express')
const cors = require('cors')
require('./dbMongo/mongoose')
const router = require('./router')
const controller = require('./socketInit')
const handlerError = require('./handlerError/handler')

const PORT = process.env.PORT || 5000
const app = express()

const corsOptions = {
    origin: 'localhost',
    optionsSuccessStatus: 200, 
  };


app.use(cors(corsOptions))
app.options('*', cors())
app.use(express.json())
app.use('/public', express.static('public'))
app.use(router)
app.use(handlerError)

const server = http.createServer(app)
server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
controller.createConnection(server)
