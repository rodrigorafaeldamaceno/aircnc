const moongose = require('../database/database')

const SpotSchema = new moongose.Schema({
  thumbmail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = moongose.model('Spot', SpotSchema)