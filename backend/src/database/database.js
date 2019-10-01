const mongoose = require('mongoose')
const { user, pass, database } = require('../../config/mongo.json')

mongoose.connect(`mongodb+srv://${user}:${pass}@tindevcluster-gxzea.mongodb.net/${database}?retryWrites=true&w=majority`,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

//functions deprecation
mongoose.set('useFindAndModify', false);

module.exports = mongoose