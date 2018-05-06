import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';
import response from './app/Http/Middleware/Response'
import session from 'express-session'
import cookiePaster from 'cookie-parser'
import memcached from 'connect-memcached'
// import redis from 'connect-redis'
import config from './config/config'

const app = express();
// var redisStore = redis(session)
var memcachedStore = memcached(session)
app.disable('x-powered-by');

// View engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev', {
  skip: () => app.get('env') === 'test'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use(cookiePaster())

app.use(session({
  key: config.session.key,
  secret: config.session.secrect,
  // store: new redisStore({
  //   host: config.redis.host,
  //   port: config.redis.port,
  //   pass: config.redis.pass,
  //   ttl: config.redis.ttl
  // }),
  store: new memcachedStore({
    hosts: config.memcached.hosts,
    secrect: config.memcached.secret
  }),
  cookie: {
    maxAge: config.cookie.maxAge
  }
}))

// Routes
// app.use('/', routes);
app.use(/\/api/, response)

routes(app)

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res
    .status(err.status || 500)
    .render('error', {
      message: err.message
    });
});

export default app;
