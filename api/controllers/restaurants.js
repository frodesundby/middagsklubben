const RestaurantMongoSchema = require('../models/restaurantMongoSchema')
const RestaurantDefinition = require('../models/restaurantDefinition')



exports.getRestaurants = () => {

    return (req, res) => {
        console.log("got request")
        RestaurantMongoSchema.find(createMongoQueryFromRequest(req.query), (err, restaurants) => {
            if (err) return next(err)

            restaurants = JSON.parse(JSON.stringify(restaurants)) // doc -> json

            res.header('Content-Type', 'application/json; charset=utf-8')
            res.json(restaurants)

        })
    }
    return (req, res) => res.send("get restaurant: " + req.params.restaurant)
}

exports.getRestaurant = () => {
    return (req, res) => {
        RestaurantMongoSchema.findOne({_id: req.params.restaurant}, (err, restaurant) => {
            if (err) return next(err)
            res.json(restaurant)

        })
    }

}

exports.updateRestaurant = () => {
    return (req, res) => res.send("updating restaurant: " + req.params.restaurant)
}

exports.createRestaurant = () => {
    return (req, res) => {
        const validation = schemaValidateRequest(req.body)
        if (validation.errors.length > 0) {
            return res.status(400).send('JSON schema validation failed with the following errors: ' + validation.errors)
        }
        RestaurantMongoSchema.collection.insert(req.body, (err, docs) => {
            if (err) {
                console.error(err.message)
                res.status(500).send(err.message)
            } else {
                console.log(req.body.name + ' restaurant created')
                res.status(201).send(req.body.name + " created")
            }
        })
    }
}

exports.deleteRestaurant = () => {
    return (req, res) => res.send("deleted restaurant: " + req.params.restaurant)
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