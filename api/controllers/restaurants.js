const schemas = require('../models/mongoSchemas')
const common = require('./common_methods')
const RestaurantDefinition = require('../models/restaurantDefinition')
const RestaurantValidator = require('../models/restaurantValidator')
const RestaurantMongoSchema = schemas.Restaurant

exports.getRestaurants = () => {
    return (req, res) => {
        RestaurantMongoSchema.find(common.createMongoQueryFromRequest(req.query, RestaurantDefinition), (err, restaurants) => {
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
        const validation = common.schemaValidateRequest(req.body, RestaurantValidator)
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
        const validation = common.schemaValidateRequest(req.body, RestaurantValidator)
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