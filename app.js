const createError = require('http-errors');
const express = require('express');
const { Client } = require('pg')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

const dbClient = new Client()
dbClient.connect((err) => {
  if (err) {
    console.error('error connecting to db:', err.stack)
  } else {
    console.log('connected to db')

    const blogRouter = require('./routes/blog')(dbClient)
    const portfolioRouter = require('./routes/portfolio')(dbClient)

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/blog', blogRouter)
    app.use('/portfolio', portfolioRouter)
    app.use((req, res, next) => next(createError(404)));

    app.use(function(err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      const code = err.status || 500
      res.status(code).send(`<img src="https://http.cat/${code}" alt="Error Code ${code}"></img>`);
    });
  }
})

module.exports = app;
