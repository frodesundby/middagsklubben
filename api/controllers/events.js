const schemas = require('../models/mongoSchemas')
const common = require('./common_methods')
const EventDefinition = require('../models/eventDefinition')
const EventMongoSchema = schemas.Event


exports.getEvents = () => {
    return (req, res) => {
        EventMongoSchema.find(common.createMongoQueryFromRequest(req.query, EventDefinition), (err, events) => {
            if (err) return res.status(400).send(err)
            res.send(events)
        })
    }
}

exports.getEvent = () => {
    return (req, res) => {
        EventMongoSchema.findOne({_id: req.params.id}, (err, event) => {
            if (err) return res.status(400).send("Unable to find event with id " + req.params.id)
            res.json(event)
        })
    }

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
