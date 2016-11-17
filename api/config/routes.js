module.exports = (app) => {
    const dummy = require('../controllers/dummy')


    app.post('/api/v1/dummy', dummy.registerSumtn())
    app.get('/api/v1/dummy', dummy.getSumtn())
    app.put('/api/v1/dummy', dummy.putSumtn())
    app.delete('/api/v1/dummy', dummy.deleteSumtn())

}