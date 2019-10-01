const moongose = require('../database/database')

const UserSchema = new moongose.Schema({
  email: String
})

module.exports = moongose.model('User', UserSchema)