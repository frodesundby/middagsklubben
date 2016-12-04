//var Server = require('../models/restaurants')

exports.getUsers = () => {
    return (req, res) => res.send("get users")

}

exports.getUser = () => {
    return (req, res) => res.send("get user: " + req.params.user)
    
}

exports.updateUser = () => {
    return (req, res) => res.send("updating user: " + req.params.user)
}

exports.createUser = () => {
    return (req, res) => res.status(201).send(req.params.user + " created")
}

exports.deleteUser = () => {
    return (req, res) => res.send("deleted user: " + req.params.user)
}
