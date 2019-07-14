var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var blogRouter = require('./routes/blog');
var portfolioRouter = require('./routes/portfolio');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/blog', blogRouter);
app.use('/portfolio', portfolioRouter);
app.use((req, res, next) => next(createError(404)));

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const code = err.status || 500
  res.status(code).send(`<img src="https://http.cat/${code}" alt="Error Code ${code}"></img>`);
});

module.exports = app;
