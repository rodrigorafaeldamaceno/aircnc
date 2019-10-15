const PORT = 3333
const express = require('express')
const routes = require('./routes/routes')
const cors = require('cors')
const path = require('path')

const app = express()
app.disable('X-Powered-By')

app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(PORT)