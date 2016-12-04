//var Server = require('../models/restaurants')

// Schedules
exports.getSchedules = () => {
    return (req, res) => res.send("get schedules")
}

exports.getSchedule = () => {
    return (req, res) => res.send("get schedule: " + req.params.schedule)
}

exports.updateSchedule = () => {
    return (req, res) => res.send("updating schedule: " + req.params.schedule)
}

exports.createSchedule = () => {
    return (req, res) => res.status(201).send(req.params.schedule + " created")
}

exports.deleteSchedule = () => {
    return (req, res) => res.send("deleted schedule: " + req.params.schedule)
}


// Participants
exports.getParticipants = () => {
    return (req, res) => res.send("get participants")
}

exports.getParticipant = () => {
    return (req, res) => res.send("get participant: " + req.params.participant + " on event: " + req.params.schedule)
}

exports.updateParticipant = () => {
    return (req, res) => res.send("updating participant: " + req.params.participant + " on event: " + req.params.schedule)
}

exports.createParticipant = () => {
    return (req, res) => res.status(201).send(req.params.participant + " created on event: " + req.params.schedule)
}

exports.deleteParticipant = () => {
    return (req, res) => res.send("deleted participant: " + req.params.participant + " on event: " + req.params.schedule)
}

