const mongoose = require('mongoose')

exports.schemaValidateRequest = (request, validator) => {
    const validate = require('jsonschema').validate
    const restaurantJsonSchema = require(validator)
    return validate(request, restaurantJsonSchema)
}

exports.createMongoQueryFromRequest = (request, definition) => {
    var query = {}

    for (var queryParam in request) {
        if (queryParam in definition) {
            if (definition[queryParam].type === Number) {
                query[queryParam] = request[queryParam]
            } else {
                query[queryParam] = new RegExp(request[queryParam], 'i')
            }
        } else {
            continue
        }
    }

    return query
}

