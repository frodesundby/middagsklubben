module.exports = (app) => {
    const restaurants = require('../controllers/restaurants')
    const api_root = '/api/v1'

    app.get(api_root +'/restaurants', restaurants.getRestaurants())
    app.get(api_root + '/restaurants/:id', restaurants.getRestaurant())
    app.put(api_root + '/restaurants/:id', restaurants.updateRestaurant())
    app.post(api_root + '/restaurants/:id', restaurants.createRestaurant())
    app.delete(api_root +'/restaurants/:id', restaurants.deleteRestaurant())

}