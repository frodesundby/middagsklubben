const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = {
    date: {
        mongoSchemaDefinition: {type: Date, default: Date.now},
        schemaType: 'date'
    },
    created: {
        mongoSchemaDefinition: {type: Date, default: Date.now},
        schemaType: 'date'
    },
    restaurant: {
        mongoSchemaDefinition: {type: Schema.ObjectId, ref: 'Restaurant'},
        schemaType: 'string'

    }

}

