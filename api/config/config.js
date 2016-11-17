const path = require('path')
const rootPath = path.normalize(__dirname + '/..')

const config = {
    root: rootPath,
    port: process.env['PORT'] || 8443,
    dbUrl: process.env['db_url'] || 'mongodb://localhost:27017/middagsklubben',
    dbUser: process.env['db_username'] || 'middagsklubben',
    dbPassword: process.env['db_password'] || 'middagsklubben'
}

module.exports = config