const moongose = require('../database/database')

const BookingSchema = new moongose.Schema({
  date: String,
  approved: Boolean,
  user: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'User'
  },
  spot: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'Spot'
  }
})

module.exports = moongose.model('Booking', BookingSchema)