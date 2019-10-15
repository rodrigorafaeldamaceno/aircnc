const express = require('express')

const sessionController = require('../controllers/sessionController')
const spotController = require('../controllers/spotController')
const dashController = require('../controllers/dashController')
const bookingController = require('../controllers/bookingController')

const multer = require('multer')
const uploadConfig = require('../config/upload')
const upload = multer(uploadConfig)


const routes = express.Router()

// req.query = acessar query params (para filtos)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição
// req.headers = acessar header da requisição

routes.post('/sessions', sessionController.store)

routes.post('/spots', upload.single('thumbnail'), spotController.store)
routes.get('/spots', spotController.index)

routes.get('/dashboard', dashController.show)

routes.post('/spots/:id/bookings', bookingController.store)
module.exports = routes