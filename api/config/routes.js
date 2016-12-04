module.exports = (app) => {
    const api_root = '/api/v1'

    const restaurants = require('../controllers/restaurants')
    const events = require('../controllers/events')
    const schedules = require('../controllers/schedules')
    const users = require('../controllers/users')

    // Restaurants
    app.get(api_root +'/restaurants', restaurants.getRestaurants())
    app.post(api_root + '/restaurants', restaurants.createRestaurant())
    app.get(api_root + '/restaurants/:restaurant', restaurants.getRestaurant())
    app.put(api_root + '/restaurants/:restaurant', restaurants.updateRestaurant())
    app.delete(api_root +'/restaurants/:restaurant', restaurants.deleteRestaurant())

    // Events
    app.get(api_root +'/events', events.getEvents())
    app.get(api_root + '/events/:event', events.getEvent())
    app.put(api_root + '/events/:event', events.updateEvent())
    app.post(api_root + '/events/:event', events.createEvent())
    app.delete(api_root +'/events/:event', events.deleteEvent())

    app.get(api_root +'/events/:event/comments', events.getComments())
    app.get(api_root + '/events/:event/comments/:comment', events.getComment())
    app.put(api_root + '/events/:event/comments/:comment', events.updateComment())
    app.post(api_root + '/events/:event/comments/:comment', events.createComment())
    app.delete(api_root +'/events/:event/comments/:comment', events.deleteComment())

    app.get(api_root +'/events/:event/ratings', events.getRatings())
    app.get(api_root + '/events/:event/ratings/:rating', events.getRating())
    app.put(api_root + '/events/:event/ratings/:rating', events.updateRating())
    app.post(api_root + '/events/:event/ratings/:rating', events.createRating())
    app.delete(api_root +'/events/:event/ratings/:rating', events.deleteRating())

    // Schedules
    app.get(api_root +'/schedules', schedules.getSchedules())
    app.get(api_root + '/schedules/:schedule', schedules.getSchedule())
    app.put(api_root + '/schedules/:schedule', schedules.updateSchedule())
    app.post(api_root + '/schedules/:schedule', schedules.createSchedule())
    app.delete(api_root +'/schedules/:schedule', schedules.deleteSchedule())

    app.get(api_root +'/schedules/:schedule/participants', schedules.getParticipants())
    app.get(api_root + '/schedules/:schedule/participants/:participant', schedules.getParticipant())
    app.put(api_root + '/schedules/:schedule/participants/:participant', schedules.updateParticipant())
    app.post(api_root + '/schedules/:schedule/participants/:participant', schedules.createParticipant())
    app.delete(api_root +'/schedules/:schedule/participants/:participant', schedules.deleteParticipant())

    // Users
    app.get(api_root +'/users', users.getUsers())
    app.get(api_root + '/users/:user', users.getUser())
    app.put(api_root + '/users/:user', users.updateUser())
    app.post(api_root + '/users/:user', users.createUser())
    app.delete(api_root +'/users/:user', users.deleteUser())
}