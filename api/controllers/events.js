//var Server = require('../models/restaurants')

// Events
exports.getEvents = () => {
    return (req, res) => res.send("get events")
}

exports.getEvent = () => {
    return (req, res) => res.send("get event: " + req.params.event)
}

exports.updateEvent = () => {
    return (req, res) => res.send("updating event: " + req.params.event)
}

exports.createEvent = () => {
    return (req, res) => res.status(201).send(req.params.event + " created")
}

exports.deleteEvent = () => {
    return (req, res) => res.send("deleted event: " + req.params.event)
}


// Comments
exports.getComments = () => {
    return (req, res) => res.send("get comments")
}

exports.getComment = () => {
    return (req, res) => res.send("get comment: " + req.params.comment)
}

exports.updateComment = () => {
    return (req, res) => res.send("updating comment: " + req.params.comment)
}

exports.createComment = () => {
    return (req, res) => res.status(201).send(req.params.comment + " created")
}

exports.deleteComment = () => {
    return (req, res) => res.send("deleted comment: " + req.params.comment)
}


// Ratings
exports.getRatings = () => {
    return (req, res) => res.send("get ratings")
}

exports.getRating = () => {
    return (req, res) => res.send("get rating: " + req.params.rating)
}

exports.updateRating = () => {
    return (req, res) => res.send("updating rating: " + req.params.rating)
}

exports.createRating = () => {
    return (req, res) => res.status(201).send(req.params.rating + " created")
}

exports.deleteRating = () => {
    return (req, res) => res.send("deleted rating: " + req.params.rating)
}
