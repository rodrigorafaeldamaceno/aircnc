const PORT = 3333
const express = require('express')
const routes = require('./routes/routes')
const cors = require('cors')

const app = express()
app.disable('X-Powered-By')

app.use(cors())
app.use(express.json())
app.use(routes)




app.listen(PORT)