const Pool = require('pg').Pool
const pool = new Pool({
    user: 'schmaster',
    host: '52.183.143.219',
    database: 'postgres',
    password: 'schmaster',
    port: 5432,
    timezone: 'utc'
})
var pg = require('pg');
var types = pg.types;
types.setTypeParser(1114, str => str)

module.exports = pool;