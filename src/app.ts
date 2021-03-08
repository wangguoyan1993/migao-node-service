let createError = require('http-errors');
let Express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let application = Express();

application.engine('art', require('express-art-template'));
// view engine setup
application.set('views', path.join(__dirname, 'views'));
application.set('view engine', 'art');

application.use(logger('dev'));
application.use(Express.json());
application.use(Express.urlencoded({ extended: false }));
application.use(cookieParser());
application.use(Express.static(path.join(__dirname, 'public')));

application.use('/', indexRouter);
application.use('/users', usersRouter);

// catch 404 and forward to error handler
application.use(function(req: any, res: any, next: (arg0: any) => void) {
  next(createError(404));
});

// error handler
application.use(function(err: { message: any; status: any; }, req: { application: { get: (arg0: string) => string; }; }, res: { locals: { message: any; error: any; }; status: (arg0: any) => void; render: (arg0: string) => void; }, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.application.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = application;
