var express = require('express');

var path = require('path');
var favicon = require('serve-favicon');
//var logger = require('morgan');
const cors = require('cors');
var bodyParser = require('body-parser');
var news=require('./routes/user')
var book = require('./routes/book');
var fileRoute=require('./routes/file');  //file route
var app = express();
var mongoose = require('mongoose');


app.use(cors());
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/user', express.static(path.join(__dirname, 'dist')));
app.use('/file', express.static(path.join(__dirname, 'dist')));
app.use('/book', book);
app.use('/user',news);
app.use('/file',fileRoute);
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/mean-angular5',
 { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

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