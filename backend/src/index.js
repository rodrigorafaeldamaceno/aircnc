const PORT = 3333
const express = require('express')
const routes = require('./routes/routes')

const app = express()
app.disable('X-Powered-By')

app.use(express.json())
app.use(routes)




app.listen(PORT)