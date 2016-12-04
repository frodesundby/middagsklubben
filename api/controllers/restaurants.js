const RestaurantMongoSchema = require('../models/restaurantMongoSchema')
const RestaurantDefinition = require('../models/restaurantDefinition')



exports.getRestaurants = () => {

    return (req, res) => {
        RestaurantMongoSchema.find(createMongoQueryFromRequest(req.query), (err, restaurants) => {
            if (err) return res.status(400).send(err)

            res.send(restaurants)

        })
    }
}

exports.getRestaurant = () => {
    return (req, res) => {
        RestaurantMongoSchema.findOne({_id: req.params.id}, (err, restaurant) => {
            if (err) return res.status(400).send("Unable to find restaurant with id " + req.params.id)
            res.json(restaurant)

        })
    }

}

exports.updateRestaurant = () => {
    return (req, res) => {
        const validation = schemaValidateRequest(req.body)
        if (validation.errors.length > 0) {
            return res.status(400).send('JSON schema validation failed with the following errors: ' + validation.errors)
        }
        RestaurantMongoSchema.findOneAndUpdate({_id: req.params.id}, req.body, (err, upd) => {
            if (err) {
                console.error(err.message)
                res.status(500).send(err.message)
            } else {
                console.log(req.body.name + 'updated')
                res.send(upd)
            }

        } )
    }
}

exports.createRestaurant = () => {
    return (req, res) => {
        const validation = schemaValidateRequest(req.body)
        if (validation.errors.length > 0) {
            return res.status(400).send('JSON schema validation failed with the following errors: ' + validation.errors)
        }
        RestaurantMongoSchema.collection.insert(req.body, (err) => {
            if (err) {
                console.error(err.message)
                res.status(500).send(err.message)
            } else {
                console.log(req.body.name + ' restaurant created')
                res.status(201).send(req.body.name + " created successfully")
            }
        })
    }
}

exports.deleteRestaurant = () => {
    return (req, res) => {
        RestaurantMongoSchema.findOneAndRemove({_id:req.params.id}, (err) => {
            if (err) res.status(400).send(err.message)
            res.status(204).send()

        })
    }
}


const schemaValidateRequest = (request) => {
    const validate = require('jsonschema').validate
    const restaurantJsonSchema = require('../models/restaurantValidator')
    return validate(request, restaurantJsonSchema)
}

var createMongoQueryFromRequest = function (request) {
    var query = {}

    for (var queryParam in request) {
        if (queryParam in RestaurantDefinition) {
            if (RestaurantDefinition[queryParam].type === Number) {
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