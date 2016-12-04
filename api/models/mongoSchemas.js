const mongoose = require('mongoose')
const restaurantDefinition = require('./restaurantDefinition')
const eventDefinition = require('./eventDefinition')


const createMongoSchemaDefinition = (def) =>{
    let mongoSchema = {}

    for (let key in def) {
        mongoSchema[key] = def[key].mongoSchemaDefinition
    }

    return mongoose.Schema(mongoSchema)
}


exports.Restaurant = mongoose.model('Restaurant', createMongoSchemaDefinition(restaurantDefinition))
exports.Event = mongoose.model('Event', createMongoSchemaDefinition(eventDefinition))
