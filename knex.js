const knex = require( 'knex' )( {

    client: 'mysql',
    debug: false,
    connection: {

        host: 'localhost',

        user: 'root',
        password: 'navgurukul',
        database: 'information',
        charset: 'utf8',

    }

} );
module.exports = knex