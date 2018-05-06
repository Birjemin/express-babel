import config from './config'
import knex from 'knex'
import bookshelf from 'bookshelf'

var knexObj = knex({
    client: config.mysql.client,
    connection: {
        host: config.mysql.host,
        port: config.mysql.port,
        user: config.mysql.user,
        password: config.mysql.password,
        database: config.mysql.database,
        charset: config.mysql.charset
    }
});
var bookshelfGlobal = bookshelf(knexObj);

export default bookshelfGlobal