const PORT = 3333
const express = require('express')
const routes = require('./routes/routes')
const cors = require('cors')
const path = require('path')

const socketio = require('socket.io')
const http = require('http')

const app = express()
app.disable('X-Powered-By')

const server = http.Server(app)
const io = socketio(server)

const connectedUsers = {}
// pega quando um user se conecta a aplicação
io.on('connection', socket => {
  // console.log('Usuario conectado ', socket.id)
  // console.log(socket.handshake.query)

  const { user } = socket.handshake.query

  connectedUsers[user] = socket.id
  // socket.emit('message', 'Fala')
})

app.use((req, res, next) => {
  req.io = io
  req.connectedUsers = connectedUsers

  next()
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

server.listen(PORT)