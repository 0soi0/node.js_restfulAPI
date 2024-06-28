var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var insertRouter = require('./routes/insert');
var selectRouter = require('./routes/select');
var updateRouter = require('./routes/patch');
var testRouter = require('./routes/test');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/insert',insertRouter);
app.use('/select',selectRouter);
app.use('/patch',updateRouter);
app.use('/test', testRouter);

module.exports = app;