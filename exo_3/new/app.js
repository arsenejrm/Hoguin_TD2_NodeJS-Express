var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tab_bordRouter = require('./routes/tab_bord');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var logoutRouter = require('./routes/logout');
var redirectionRouter = require('./routes/redirection');

var app = express();

mongoose.connect('mongodb://22302352:6hd5kubi@192.168.24.1:27017/22302352_db')
    .then((result)=>{
      console.log("connexion serveur Mongo réussie");
    } ).catch(err=>{
  console.log("erreur de connexion");
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'secret',resave: false, saveUninitialized: false}));

app.use((req, res, next) => {
  res.locals.is_session = req.session.isLog || false;
  next();
});

app.use('/', indexRouter);
app.use('/tab_bord', tab_bordRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/logout', logoutRouter);
app.use('/redirection', redirectionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
