const mongoose = require('mongoose')
const restaurantDefinition = require('./restaurantDefinition')

const createMongoSchemaDefinitionFrom = (def) =>{
  let mongoSchema = {}

  for (let key in def) {
    mongoSchema[key] = def[key].mongoSchemaDefinition
  }

  return mongoose.Schema(mongoSchema)
}

const mongoServerSchema = createMongoSchemaDefinitionFrom(restaurantDefinition)

mongoServerSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    delete ret._id
  }
})

module.exports = mongoose.model('Restaurant', mongoServerSchema)
