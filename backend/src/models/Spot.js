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
}, {
  toJSON: {
    virtuals: true
  }
})

SpotSchema.virtual('thumbnail_url').get(function () {
  return `http://localhost:3333/files/${this.thumbmail}`
})

module.exports = moongose.model('Spot', SpotSchema)