const restaurantDefinition = require('./restaurantDefinition')

const baseJsonSchema = {
    '$schema': 'http://json-schema.org/draft-04/schema#',
    'id': '/api/v1/restaurants',
    'description': 'schema defining valid JSON for registering restaurants',
    'type': 'object',
    'uniqueItems': true,
    'items': {
        'type': 'object',
        'properties': {},
        'required': ['name', 'address', 'kitchen', 'image']
    }
}

const enrichWithRestaurantDefinition = (baseJsonSchema, def) => {
    let jsonSchema = Object.assign({}, baseJsonSchema)

    for (let key in def) {
        jsonSchema.items.properties[key] = {type: def[key].schemaType}
    }

    return jsonSchema
}

module.exports = enrichWithRestaurantDefinition(baseJsonSchema, restaurantDefinition)
