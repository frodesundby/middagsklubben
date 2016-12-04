module.exports = {
    name: {
        mongoSchemaDefinition: {type: String, unique: true, lowercase: true},
        schemaType: 'string'
    },
    address: {
        mongoSchemaDefinition: {type: String, lowercase: true},
        schemaType: 'string'
    },
    kitchen: {
        mongoSchemaDefinition: {type: String, lowercase: true},
        schemaType: 'string'
    },
    image: {
        mongoSchemaDefinition: {type: String, lowercase: true},
        schemaType: 'string'
    },
    created: {
        mongoSchemaDefinition: {type: String, lowercase: true},
        schemaType: 'string'
    },
}
