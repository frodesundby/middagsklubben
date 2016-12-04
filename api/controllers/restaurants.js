//var Server = require('../models/restaurants')

exports.getRestaurants = () => {
    return (req, res) => res.send("get restaurants")

}

exports.getRestaurant = () => {
    return (req, res) => {
        return res.send("get restaurant: " + req.params.id)
    }
}

exports.updateRestaurant = () => {
    return (req, res) => res.send("updating restaurant: " + req.params.id)
}

exports.createRestaurant = () => {
    return (req, res) => res.status(201).send(req.params.id + " created")
}

exports.deleteRestaurant = () => {
    return (req, res) => res.send("deleted restaurant: " + req.params.id)
}
