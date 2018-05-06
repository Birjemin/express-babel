export default {
  cookie: {
    maxAge: 1800000
  },
  session: {
    secrect: 'keybord ahh',
    key : 'session_key'
  },
  memcached: {
    hosts: ['127.0.0.1:11211'],
    secret: 'ahhhh dfd df'
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
    pass: null,
    ttl: 36000
  },
  mysql: {
    client: 'mysql',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'htmlk',
    charset: 'utf8'
  }
}