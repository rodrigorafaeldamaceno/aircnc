const express = require('express')
const sessionController = require('../controllers/sessionController')
const spotController = require('../controllers/spotController')
const multer = require('multer')
const uploadConfig = require('../config/upload')


const upload = multer(uploadConfig)


const routes = express.Router()

routes.post('/sessions', sessionController.store)
routes.post('/spots', upload.single('thumbmail'), spotController.store)



module.exports = routes