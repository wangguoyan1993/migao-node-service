let createError = require('http-errors');
let Express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let application = Express();

// view engine setup
application.set('views', path.join(__dirname, 'views'));
application.set('view engine', 'jade');

application.use(logger('dev'));
application.use(Express.json());
application.use(Express.urlencoded({ extended: false }));
application.use(cookieParser());
application.use(Express.static(path.join(__dirname, 'public')));

application.use('/', indexRouter);
application.use('/users', usersRouter);

// catch 404 and forward to error handler
application.use(function(req, res, next) {
  next(createError(404));
});

// error handler
application.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.application.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = application;
