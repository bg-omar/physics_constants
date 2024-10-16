var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var calculator = require('./lib/node-differentiator');

var app = express();

app.use("/public", express.static(__dirname + "/public"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const input = [
        '(1 + sin(x)) ^ 3',
        'ln(sqrt(x) + 1)',
        '10 * (x + tan(x))',
        'sqrt(32)*x^sqrt(2)',
        '-8/(x)^2',
        '5*x^-1.5'
    ][Math.floor(Math.random() * 3)];
    res.render('view', { input });
});

app.get('/getDerivative', (req, res) => {
    const inputFunction = decodeURIComponent(req.query.function);
    res.status(200).json(calculator.getDerivative(inputFunction));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
