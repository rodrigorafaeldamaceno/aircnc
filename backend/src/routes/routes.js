const express = require('express')
const sessionController = require('../controllers/sessionController')
const spotController = require('../controllers/spotController')


const routes = express.Router()

routes.post('/sessions', sessionController.store)
routes.post('/spots', spotController.store)



module.exports = routes