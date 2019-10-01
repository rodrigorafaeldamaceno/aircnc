const Spot = require('../models/Spot')
const User = require('../models/User')


module.exports = {
  async index(req, res) {
    const { tech } = req.query
    const spots = await Spot.find({ techs: tech })
    
    return res.json(spots)
  },
  async store(req, res) {
    // console.log(req.body)
    // console.log(req.file)
    const { filename } = req.file

    const { company, techs, price } = req.body

    const { user } = req.headers

    const userExists = await User.findById(user)

    if (!userExists) {
      return res.status(400).json({
        error: 'User does not exists'
      })
    }

    const spot = await Spot.create({
      thumbmail: filename,
      company,
      price,
      techs: techs.split(',').map(tech => tech.trim()),
      user
    })

    return res.json(spot)
  }
}