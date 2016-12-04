module.exports = (app) => {
    const api_root = '/api/v1'

    const restaurants = require('../controllers/restaurants')
    const events = require('../controllers/events')
    const schedules = require('../controllers/schedules')
    const users = require('../controllers/users')

    // Restaurants
    app.get(api_root +'/restaurants', restaurants.getRestaurants())
    app.post(api_root + '/restaurants', restaurants.createRestaurant())
    app.get(api_root + '/restaurants/:id', restaurants.getRestaurant())
    app.put(api_root + '/restaurants/:id', restaurants.updateRestaurant())
    app.delete(api_root +'/restaurants/:id', restaurants.deleteRestaurant())

    // Events
    app.get(api_root +'/events', events.getEvents())
    app.post(api_root + '/events', events.createEvent())
    app.get(api_root + '/events/:id', events.getEvent())
    app.put(api_root + '/events/:id', events.updateEvent())
    app.delete(api_root +'/events/:id', events.deleteEvent())

    app.get(api_root +'/events/:id/comments', events.getComments())
    app.post(api_root + '/events/:id/comments', events.createComment())
    app.get(api_root + '/events/:id/comments/:id', events.getComment())
    app.put(api_root + '/events/:id/comments/:id', events.updateComment())
    app.delete(api_root +'/events/:id/comments/:id', events.deleteComment())

    app.get(api_root +'/events/:id/ratings', events.getRatings())
    app.post(api_root + '/events/:id/ratings', events.createRating())
    app.get(api_root + '/events/:id/ratings/:id', events.getRating())
    app.put(api_root + '/events/:id/ratings/:id', events.updateRating())
    app.delete(api_root +'/events/:id/ratings/:id', events.deleteRating())

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