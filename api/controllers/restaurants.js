//var Server = require('../models/restaurants')

exports.getRestaurants = () => {
    return (req, res) => res.send("get restaurants")

}

exports.getRestaurant = () => {
    return (req, res) => {
        return res.send("get restaurant: " + req.params.restaurant)
    }
}

exports.updateRestaurant = () => {
    return (req, res) => res.send("updating restaurant: " + req.params.restaurant)
}

exports.createRestaurant = () => {
    return (req, res) => res.status(201).send(req.params.restaurant + " created")
}

exports.deleteRestaurant = () => {
    return (req, res) => res.send("deleted restaurant: " + req.params.restaurant)
}
