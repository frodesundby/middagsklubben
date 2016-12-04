module.exports = {
    name: {
        mongoSchemaDefinition: {type: String, unique: true, lowercase: true},
        schemaType: 'string'
    },
    address: {
        mongoSchemaDefinition: {type: String,},
        schemaType: 'string'
    },
    kitchen: {
        mongoSchemaDefinition: {type: Array, lowercase: true},
        schemaType: 'array'
    },
    image: {
        mongoSchemaDefinition: {type: String, lowercase: true},
        schemaType: 'string'
    },
    created: {
        mongoSchemaDefinition: {type: Date, default: Date.now},
        schemaType: 'date'
    },
}

