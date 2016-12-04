module.exports = (app) => {
    const api_root = '/api/v1'

    const restaurants = require('../controllers/restaurants')
    const events = require('../controllers/events')
    //const schedulers = require('../controllers/scedulers')
    //const users = require('../controllers/users')

    // Restaurants
    app.get(api_root +'/restaurants', restaurants.getRestaurants())
    app.get(api_root + '/restaurants/:restaurant', restaurants.getRestaurant())
    app.put(api_root + '/restaurants/:restaurant', restaurants.updateRestaurant())
    app.post(api_root + '/restaurants/:restaurant', restaurants.createRestaurant())
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
}